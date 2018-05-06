import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Table from './table';

class Play extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    let rows = 10;
                    let cols = 10;
                    this.props.updateBoardSize(rows, cols);
                    this.props.history.push('/');
                }}>Home</button>
                <Table rows={this.props.size.tableRows} cols={this.props.size.tableCols} />
            </div>
        )
    }
}

export default Play;
