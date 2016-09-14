import React, { Component } from 'react'

import RightPanel from '../components/RightPanel'
import RightPanelBattle from '../components/RightPanelBattle'

class RightPanelContainer extends Component {
    render() {

        let state = this.props.state;
        let gameActions  = this.props.gameActions;

        return  typeof this.props.state.battle === 'undefined' ? <RightPanel state={state} gameActions={gameActions} /> : <RightPanelBattle state={state} gameActions={gameActions} />
    }
}

export default RightPanelContainer