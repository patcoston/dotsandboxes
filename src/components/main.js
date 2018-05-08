import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './home';
import Setup from './setup';
import Play from './play';

class Main extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" render={() => (
                    <div>
                        <Home {...this.props} />
                    </div>
                )} />

                <Route exact path="/Setup" render={() => (
                    <div>
                        <Setup {...this.props} />
                    </div>
                )} />

                <Route path="/Play" render={({history}) => (
                    <div>
                        <Play {...this.props} />
                    </div>
                )} />

            </div>
        ) 
    }
}

export default Main;
