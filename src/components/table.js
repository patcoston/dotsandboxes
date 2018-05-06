import React, {Component} from 'react';

let colKey = 0;

class TableCols extends Component {
    render() {
        let cols = [];
        for (let i = 0; i<this.props.cols; i++) {
            cols.push(<td key={++colKey}></td>);
        }
        return cols;
    }
}

class TableRows extends Component {
    render() {
        let rows = [];
        for (let i = 0; i<this.props.rows; i++) {
            rows.push(<tr><TableCols key={++colKey} cols={this.props.cols} /></tr>);
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
