import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main_area from './main_area'
import Title from ',/Title'
import * as gameActions from '../actions/GameActions'

//import styles from './main_area.css';

class App extends Component {
    render() {

        const gameState = this.props.gameState;
        const gameActions  = this.props.gameActions;
        return <Main_area
            gameState={gameState}
            gameActions={gameActions}
        />

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
