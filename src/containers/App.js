import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main_area from './main_area'
import * as gameActions from '../actions/GameActions'

//import styles from './main_area.css';

class App extends Component {
    render() {
        const dice = Math.floor(Math.random()*11 + 2);


        const state = this.props.state;
        const {setParagraph, setEnemy}  = this.props.gameActions;
        return <Main_area
            state={state}
            setParagraph={setParagraph}
            setEnemy={setEnemy}
            dice={dice}
        />

    }
}

function mapStateToProps (state) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        gameActions: bindActionCreators(gameActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
