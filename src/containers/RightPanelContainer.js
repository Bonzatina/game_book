import React, { Component } from 'react'

import RightPanel from '../components/RightPanel'
import RightPanelBattle from '../components/RightPanelBattle'

class RightPanelContainer extends Component {
    render() {

        let gameState = this.props.gameState;
        let gameActions  = this.props.gameActions;

        return  typeof this.props.gameState.battle === 'undefined' ? <RightPanel gameState={gameState} gameActions={gameActions} /> : <RightPanelBattle gameState={gameState} gameActions={gameActions} />
    }
}

export default RightPanelContainer