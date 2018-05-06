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
                }}>Home</button><br />
                <label>Scores:</label>
                <span>{this.props.players.names[0]}:{this.props.players.scores[0]}</span>
                <span>{this.props.players.names[1]}:{this.props.players.scores[1]}</span>
                <Table rows={this.props.board.tableRows} cols={this.props.board.tableCols} />
            </div>
        )
    }
}

export default Play;
