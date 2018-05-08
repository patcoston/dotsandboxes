import React, {Component} from 'react';

let colKey = 0;

class TableCols extends Component {
    render() {
        let cols = [];
        let row = parseInt(this.props.row);
        let rowEven = (row % 2) === 0;
        for (let col = 0; col<this.props.cols; col++) {
            let colEven = (col % 2) === 0;
            // if row even and col not even or vice-versa, then TD is clickable
            let click = (rowEven && !colEven) || (!rowEven && colEven);
            if (click) {
                cols.push(<td key={++colKey} onClick={() => {
                    this.props.updateTableLine(row, col);
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
            rows.push(<tr><TableCols key={++colKey} cols={this.props.cols} row={r} {...this.props} /></tr>);
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
                    <TableRows key={++colKey} rows={this.props.rows} cols={this.props.cols} {...this.props} />
                </tbody>
            </table>
        );
    }
}

export default Table;
