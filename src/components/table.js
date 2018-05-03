import React, {Component} from 'react';

class TableCols extends Component {
    render() {
        let cols = [];
        for (let i = 0; i<this.props.cols; i++) {
            cols.push(<td></td>);
        }
        return cols;
    }
}

class TableRows extends Component {
    render() {
        let rows = [];
        for (let i = 0; i<this.props.rows; i++) {
            rows.push(<tr><TableCols key={i} cols={this.props.cols} /></tr>);
        }
        return rows;
    }
}

class Table extends Component {
    render() {
            return (
            <table>
                <tbody>
                    <TableRows rows={this.props.rows} cols={this.props.cols} />
                </tbody>
            </table>
        );
    }
}

export default Table;
