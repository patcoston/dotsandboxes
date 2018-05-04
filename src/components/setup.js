import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Setup extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link><br />
                <Link to="/Play">Play</Link>
            </div>
        )
    }
}

export default Setup;
