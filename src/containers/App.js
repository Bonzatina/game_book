import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main_area from './main_area'
import * as gameActions from '../actions/GameActions'

//import styles from './main_area.css';

class App extends Component {
    render() {
        const dice = Math.floor(Math.random()*11 + 2);

        const p_id = this.props.game.p_id;
        const {attack, defence, hits, speed} = this.props.game.stats;
        const {setParagraph}  = this.props.gameActions;
        return <Main_area
            attack={attack}
            defence={defence}
            hits={hits}
            speed={speed}
            p_id={p_id}
            setParagraph={setParagraph}
            dice={dice}
        />

    }
}

function mapStateToProps (state) {
    return {
        game: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        gameActions: bindActionCreators(gameActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
