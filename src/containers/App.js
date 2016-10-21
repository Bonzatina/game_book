import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main_area from './main_area'
import Title from './Title'
import * as gameActions from '../actions/GameActions'
import { Route, IndexRoute } from 'react-router'
import { Router, browserHistory } from 'react-router'

//import styles from './main_area.css';

const routeConfig = [
    { path: '/',
        component: Title,
    },
    { path: '/game',
        component: Main_area,
    },

];

class App extends Component {

    static childContextTypes = {
        gameState: React.PropTypes.object,
        gameActions: React.PropTypes.object
    };
    getChildContext() {
        return {
             gameState: this.props.gameState,
             gameActions: this.props.gameActions
        };
    }



    render() {

        return (
            <Router history={browserHistory} routes={routeConfig}>
            </Router>

        )
    }
}


function mapStateToProps (state) {
    return {
        gameState: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        gameActions: bindActionCreators(gameActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
