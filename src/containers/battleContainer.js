import React, { Component } from 'react'
import Paragraphes from './paragraphes'
import Battle from '../components/battle'
import set from 'lodash/set';

class BattleContainer extends Component {

    onStartFightBtnClick() {

        let p_id = this.props.state.p_id;

        let enemies = Paragraphes[p_id].enemy;


        let char_speed = this.props.state.stats.speed;
        let fight_queue = char_speed+Math.floor(Math.random()*11 + 2);


        //for (let i; i<enemies.length; i++) {
        //
        //};

        this.props.gameActions.setEnemy({
            fight_queue: fight_queue,

            enemy: enemies,
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
        let enemies = this.props.state.enemy;

        set(enemies, '[0].hits', 3);

        this.props.gameActions.kickEnemy( enemies, newRound);
    }

    render() {


    console.log( this.props.state.stats.hits);
        let startFight = ::this.onStartFightBtnClick;
        let figth_round = ::this.onFightRoundBtnClick;



        return <Battle state={this.props.state} gameActions={this.props.gameActions} startFight={startFight} figth_round={figth_round}  />
    }
}

export default BattleContainer