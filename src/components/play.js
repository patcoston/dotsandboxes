import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Table from './table';

class Play extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Link to="/">Home</Link><br />
                <Link to="/Setup">Setup</Link><br />
                <Table rows="7" cols="7" />
            </div>
        )
    }
}

export default Play;
