import Main from './main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/actions';
import {withRouter} from 'react-router';

// Container component, no DOM markup
// Provides data to presentational components

function mapStateToProps(state) {
    return {
        players: {...state.players},
        board: {...state.board},
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
