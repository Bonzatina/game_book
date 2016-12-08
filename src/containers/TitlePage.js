import React, { Component } from 'react'
import { Link } from 'react-router'


class Title extends Component {

    render() {

        return <div className="title_page">
            <ul >
                <li><Link to='/game'>Начать игру</Link></li>
                {/*  <li><Link to='/list'>Продолжить игру</Link></li>   */ }
                <li><Link to='/rules'>Правила</Link></li>
                <button onClick={function() {fetch('*', {
                    method: 'get',
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                    },

                })    .then(function (data) {
                    console.log('Request succeeded with JSON response', data);
                })
                    .catch(function (error) {
                        console.log('Request failed', error);
                    })}

                }>ffgfg</button>
             </ul>
        </div>
    }
}

export default Title