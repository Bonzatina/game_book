import React, { Component } from 'react'
import Paragraphes from './paragraphes'

class Battle extends Component {

    onStartFightBtnClick(e) {
        let p_id = this.props.p_id;
        let enemy_speed = Paragraphes[p_id].enemy_stats.enemy_speed;
        let char_speed = this.props.stats.speed;
        let first_strike_ismy = (char_speed+Math.floor(Math.random()*11 + 2)) - (enemy_speed+Math.floor(Math.random()*11 + 2))


        return console.log(first_strike_ismy)
    }

    render() {
        const dice = Math.floor(Math.random()*11 + 2);
        let p_id = this.props.p_id;

        let enemy_attack = Paragraphes[p_id].enemy_stats.enemy_attack;
        let enemy_defence = Paragraphes[p_id].enemy_stats.enemy_defence;
        let enemy_hits = Paragraphes[p_id].enemy_stats.enemy_hits;
        let enemy_speed = Paragraphes[p_id].enemy_stats.enemy_speed;

        let first_strike = ::this.onStartFightBtnClick;
        return <div>
            <button onClick={first_strike}>Начать бой</button>

        </div>
    }
}

export default Battle