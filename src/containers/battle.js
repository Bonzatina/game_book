import React, { Component } from 'react'
import Paragraphes from './paragraphes'

class Battle extends Component {
    render() {
        let p_id = this.props.p_id;
        let enemy_attack = Paragraphes[p_id].enemy_stats.enemy_attack;
        let enemy_defence = Paragraphes[p_id].enemy_stats.enemy_defence;
        let enemy_hits = Paragraphes[p_id].enemy_stats.enemy_hits;
        let enemy_speed = Paragraphes[p_id].enemy_stats.enemy_speed;
        return <div>
            <p>Атака: {Paragraphes[p_id].enemy_stats.enemy_attack}</p>
            <p>Защита: {this.props.defence}</p>
            <p>Жизнь: {this.props.hits}</p>
            <p>Инициатива: {enemy_speed}</p>
            <div>{this.props.dice}</div>
        </div>
    }
}

export default Battle