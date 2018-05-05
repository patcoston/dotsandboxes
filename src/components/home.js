import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/Setup">Setup</Link><br />
                <Link to="/Play">Play</Link><br />
                <div>
                    <label>Players {this.props.player[0]} and  {this.props.player[1]}</label>
                </div>
                <div>
                    <label>Board size:</label> {this.props.size.boardRows} x {this.props.size.boardCols}
                </div>
            </div>
        )
    }
}

export default Home;
