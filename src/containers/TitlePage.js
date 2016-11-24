import React, { Component } from 'react'
import { Link } from 'react-router'


class Title extends Component {

    render() {

        return <div className="title_page">
            <ul >
                <li><Link to='/game'>Начать игру</Link></li>
                {/*  <li><Link to='/list'>Продолжить игру</Link></li>   */ }
                <li><Link to='/rules'>Правила</Link></li>
             </ul>
        </div>
    }
}

export default Title