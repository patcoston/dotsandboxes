import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/Setup">Setup</Link><br />
                <Link to="/Play">Play</Link><br />
                <div>
                    <label>Players {this.props.players.names[0]} and  {this.props.players.names[1]}</label>
                </div>
                <div>
                    <label>Board size:</label> {this.props.board.boardRows} x {this.props.board.boardCols}
                </div>
            </div>
        )
    }
}

export default Home;
