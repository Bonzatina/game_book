import React, { Component } from 'react'

class Title extends Component {
    onStart () {
        this.props.gameActions.startGame(true)
    }
    render() {

        let gameState = this.props.gameState;
        let gameActions  = this.props.gameActions;
        let startGame = ::this.onStart;
        return <div> <button onClick={startGame}> start</button> </div>
    }
}

export default Title