import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Setup extends Component {
    render() {
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
                        <option selected>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                        <option>E</option>
                        <option>F</option>
                        <option>G</option>
                        <option>H</option>
                        <option>I</option>
                        <option>J</option>
                        <option>K</option>
                        <option>L</option>
                        <option>M</option>
                        <option>N</option>
                        <option>O</option>
                        <option>P</option>
                        <option>Q</option>
                        <option>R</option>
                        <option>S</option>
                        <option>T</option>
                        <option>U</option>
                        <option>V</option>
                        <option>W</option>
                        <option>X</option>
                        <option>Y</option>
                        <option>Z</option>
                    </select>
                </div>
                <div>
                    <label>Player 2 Letter</label>
                    <select id="player2">
                        <option>A</option>
                        <option selected>B</option>
                        <option>C</option>
                        <option>D</option>
                        <option>E</option>
                        <option>F</option>
                        <option>G</option>
                        <option>H</option>
                        <option>I</option>
                        <option>J</option>
                        <option>K</option>
                        <option>L</option>
                        <option>M</option>
                        <option>N</option>
                        <option>O</option>
                        <option>P</option>
                        <option>Q</option>
                        <option>R</option>
                        <option>S</option>
                        <option>T</option>
                        <option>U</option>
                        <option>V</option>
                        <option>W</option>
                        <option>X</option>
                        <option>Y</option>
                        <option>Z</option>
                    </select>
                </div>
                <div>
                    <label>Rows</label>
                    <select id="rows">
                        <option>2</option>
                        <option selected>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>
                <div>
                    <label>Cols</label>
                    <select id="cols">
                        <option>2</option>
                        <option selected>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Setup;
