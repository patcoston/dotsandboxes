import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Play extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link><br />
                <Link to="/Setup">Setup</Link>
            </div>
        )
    }
}

export default Play;
