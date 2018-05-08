import React, {Component} from 'react';

let colKey = 0;

class TableCols extends Component {
    render() {
        let cols = [];
        let rowEven = (parseInt(this.props.row) % 2) === 0;
        for (let c = 0; c<this.props.cols; c++) {
            let colEven = (c % 2) === 0;
            // if row even and col not even or vice-versa
            let click = (rowEven && !colEven) || (!rowEven && colEven);
            if (click) {
                cols.push(<td key={++colKey} onClick={() => {
                    alert('click');
                }}></td>);
            } else {
                cols.push(<td key={++colKey}></td>);
            }
        }
        return cols;
    }
}

class TableRows extends Component {
    render() {
        let rows = [];
        for (let r = 0; r<this.props.rows; r++) {
            rows.push(<tr><TableCols key={++colKey} cols={this.props.cols} row={r} /></tr>);
        }
        return rows;
    }
}

class Table extends Component {
    render() {
            colKey = 0;
            return (
            <table>
                <tbody>
                    <TableRows key={++colKey} rows={this.props.rows} cols={this.props.cols} />
                </tbody>
            </table>
        );
    }
}

export default Table;
