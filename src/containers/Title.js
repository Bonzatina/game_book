import React, { Component } from 'react'
import { Link } from 'react-router'


class Title extends Component {
    onStart () {
        this.props.gameActions.startGame(true)
    }
    render() {

        let gameState = this.props.gameState;
        let gameActions  = this.props.gameActions;
        let startGame = ::this.onStart;
        return <div>
            <ul >
                <li><Link to='/game'>Начать игру</Link></li>
                {/*  <li><Link to='/list'>Продолжить игру</Link></li>   */ }
                <li><Link to='/rules'>Правила</Link></li>
             </ul>
        </div>
    }
}

export default Title