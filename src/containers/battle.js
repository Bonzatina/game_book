import React, { Component } from 'react'
import Paragraphes from './paragraphes'

class Battle extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         first_strike_is: false,
    //         round: 1,
    //         my: {
    //             hits: 0,
    //         },
    //         enemy: {
    //             hits: 0,
    //         }
    //     }
    // }

    onStartFightBtnClick(e) {
        let p_id = this.props.state.p_id;

        let my_hits = this.props.state.stats.hits;
        let my_attack = this.props.state.stats.attack;
        let my_defence = this.props.state.stats.defence;

        let enemy_hits = Paragraphes[p_id].enemy_stats.enemy_hits;
        let enemy_attack = Paragraphes[p_id].enemy_stats.enemy_attack;
        let enemy_defence = Paragraphes[p_id].enemy_stats.enemy_defence;

        let enemy_speed = Paragraphes[p_id].enemy_stats.enemy_speed;
        let char_speed = this.props.stats.speed;
        let first_strike_is = (char_speed+Math.floor(Math.random()*11 + 2)) - (enemy_speed+Math.floor(Math.random()*11 + 2))

        this.props.setEnemy({
            first_strike_is: first_strike_is,

            enemy: {
                hits: enemy_hits,
                attack: enemy_attack,
                defence: enemy_defence,
            }
        });
    }

    onFightRoundBtnClick () {
        let p_id = this.props.state.p_id;


        // let my_hits = this.props.state.stats.hits;
        // let my_attack = this.props.state.stats.attack;
        // let my_defence = this.props.state.stats.defence;

        let attacker = this.props.state.first_strike_is > 0 ? this.props.state.stats : this.props.state.enemy;
        let defender = attacker == this.props.state.stats ? this.props.state.enemy : this.props.state.stats;

        let attack_round = (attacker.attack + Math.floor(Math.random()*11 + 2)) > defender.defence ? -2 : 0;
        let defence_round = (defender.attack + Math.floor(Math.random()*11 + 2)) > attacker.defence ? -2 : 0;
        let round_results_attack = defender.hits + defence_round;
        let round_results_defence = attacker.hits + attack_round;
        console.log('at def' + attacker.attack);
        this.state({ stats: {hits: round_results_defence}, enemy: {hits: round_results_attack} });
    }

    render() {
        const dice = Math.floor(Math.random()*11 + 2);
        let p_id = this.props.state.p_id;

console.log( this.props.state.stats.hits);
        let first_strike = ::this.onStartFightBtnClick;
        let figth_round = ::this.onFightRoundBtnClick;
        return <div>
            {this.props.state.first_strike_is ?
                <button onClick={first_strike}>Определить инициативу</button> : null}
            {this.props.state.first_strike_is > 0 ?
                <div>Результат: {this.props.state.first_strike_is} <br/>Вы получили право  первого удара</div> : null}
            {this.props.state.first_strike_is < 0 ?
                <div>Результат: {this.props.state.first_strike_is} <br/>Противник получил право  первого удара</div> : null}
            {this.props.state.first_strike_is ? <button onClick={figth_round}>раунд: {this.props.state.round}</button> : null}
        </div>
    }
}

export default Battle