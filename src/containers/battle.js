import React, { Component } from 'react'
import Paragraphes from './paragraphes'

class Battle extends Component {

    onStartFightBtnClick() {

        let p_id = this.props.state.p_id;

        let enemy_hits = Paragraphes[p_id].enemy.hits;
        let enemy_attack = Paragraphes[p_id].enemy.attack;
        let enemy_defence = Paragraphes[p_id].enemy.defence;
        let enemy_speed = Paragraphes[p_id].enemy.speed;
        let enemy_name = Paragraphes[p_id].enemy.name;

        let char_speed = this.props.state.stats.speed;
        let first_strike_is = (char_speed+Math.floor(Math.random()*11 + 2)) - (enemy_speed+Math.floor(Math.random()*11 + 2))

        this.props.gameActions.setEnemy({
            first_strike_is: first_strike_is,

            enemy: {
                attack: enemy_attack,
                defence: enemy_defence,
                hits: enemy_hits,
                speed: enemy_speed,
                name: enemy_name
            },
            round: 1
        });
    }

    onFightRoundBtnClick () {

        let attacker = this.props.state.first_strike_is > 0 ? this.props.state.stats : this.props.state.enemy;
        let defender = attacker == this.props.state.stats ? this.props.state.enemy : this.props.state.stats;

        let attack_round = (attacker.attack + Math.floor(Math.random()*11 + 2)) > defender.defence ? -2 : 0;
        let defence_round = ((defender.hits > 0) && (defender.attack + Math.floor(Math.random()*11 + 2)) > attacker.defence) ? -2 : 0;
        let round_results_attack = defender.hits + attack_round;
        let round_results_defence = attacker.hits + defence_round;

        let my_hits = this.props.state.first_strike_is > 0 ? round_results_defence : round_results_attack;
        let enemy_hits = this.props.state.first_strike_is > 0 ? round_results_attack : round_results_defence;

        let round = this.props.state.round;
        let newRound = round+1;

            console.log('at_at ' + attacker.attack, round_results_attack, 'def_at '+ defender.attack, round_results_defence );
        this.props.gameActions.fightRound( my_hits, enemy_hits, newRound);
    }

    render() {

        let p_id = this.props.state.p_id;
    console.log( this.props.state.stats.hits);
        let first_strike = ::this.onStartFightBtnClick;
        let figth_round = ::this.onFightRoundBtnClick;

        return <div>
            {this.props.state.first_strike_is == false ?
                <button onClick={first_strike}>Определить инициативу</button> : null}
            {this.props.state.first_strike_is > 0 ?
                <div>Результат: {this.props.state.first_strike_is} <br/>Вы получили право  первого удара</div> : null}
            {this.props.state.first_strike_is < 0 ?
                <div>Результат: {this.props.state.first_strike_is} <br/>{this.props.state.enemy.name} получил право  первого удара</div> : null}
            {this.props.state.first_strike_is ? <div>
                {(this.props.state.enemy && this.props.state.stats.hits > 0 && this.props.state.enemy.hits > 0) && <button onClick={figth_round}>раунд: {this.props.state.round}</button>} <br/>
                <p>Ваша жизнь: {this.props.state.stats.hits}   Противник: {this.props.state.enemy.hits} </p>
                 </div>: null}
            {this.props.state.stats.hits < 1 && <p>Вы погибли</p>}
            {(this.props.state.enemy && this.props.state.enemy.hits < 1) && <div>{Paragraphes[p_id].p_text_afterBattle}</div>}
        </div>
    }
}

export default Battle