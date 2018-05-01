import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/Setup">Go to Setup</Link><br />
                <Link to="/Play">Play</Link>
            </div>
        )
    }
}

export default Home;
