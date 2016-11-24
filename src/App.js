import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as gameActions from './actions/GameActions'


//import styles from './main_area.css';



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
        <div>{this.props.children}</div>

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
