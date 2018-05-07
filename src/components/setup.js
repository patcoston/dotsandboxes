import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Option extends Component {
    render() {
        let opt = this.props.options;
        let opts = [];
        for (let i=0; i<opt.length; i++) {
            if (opt[i] == this.props.selected) {
                opts.push(<option selected>{opt[i]}</option>);
            } else {
                opts.push(<option>{opt[i]}</option>);
            }
        }
        return opts;
    }
}

class Setup extends Component {
    render() {
        let letters = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'.split('');
        let numbers = '23456789'.split('');
        return (
            <div>
                <button onClick={() => {
                    let rows = parseInt(document.getElementById('rows').value);
                    let cols = parseInt(document.getElementById('cols').value);
                    let player1 = document.getElementById('player1').value;
                    let player2 = document.getElementById('player2').value;
                    this.props.updateBoardSize(rows, cols);
                    this.props.setPlayers({names:[player1, player2]});
                    this.props.history.push('/');
                }}>Home</button>
                <div>
                    <label>Player 1 Letter</label>
                    <select id="player1">
                        <Option options={letters} selected={this.props.players.names[0]} />
                    </select>
                </div>
                <div>
                    <label>Player 2 Letter</label>
                    <select id="player2">
                        <Option options={letters} selected={this.props.players.names[1]} />
                    </select>
                </div>
                <div>
                    <label>Rows</label>
                    <select id="rows">
                        <Option options={numbers} selected={this.props.board.boardRows} />
                    </select>
                </div>
                <div>
                    <label>Cols</label>
                    <select id="cols">
                        <Option options={numbers} selected={this.props.board.boardCols} />
                    </select>
                </div>
            </div>
        )
    }
}

export default Setup;
