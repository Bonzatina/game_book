import React, { Component } from 'react'

import Battle from '../components/battle'
import set from 'lodash/set';

class BattleContainer extends Component {

    fullFightQueue (enemies, char) {

        let fullFightQueue = enemies.slice();
        fullFightQueue.push(char);

        function compareQueue(enemyA, enemyB) {
            return enemyB.fight_queue - enemyA.fight_queue;
        }

        return fullFightQueue.sort(compareQueue);
    }

    onSetQueueBtnClick() {

        let battle = this.props.state.battle;

        let enemies = battle.enemies;

        let charQueue = this.props.state.stats.speed + Math.floor(Math.random()*11 + 2);
        let charWithQueue = Object.assign({}, this.props.state.stats, {fight_queue: charQueue} );


        let enemiesWithQueue = enemies.map(function (enemy) {
            return Object.assign({}, enemy, {fight_queue: enemy.speed + Math.floor(Math.random()*11 + 2)})
        });


        let fullFightQueue = this.fullFightQueue(enemiesWithQueue, charWithQueue);
        let fullFightQueueNames = fullFightQueue.map(function(fighter){
            return {name: fighter.name, fight_queue: fighter.fight_queue}
        });
        let battleWithQueue= {enemies: enemiesWithQueue, fullFightQueueNames: fullFightQueueNames};

        this.props.gameActions.setQueue(battleWithQueue, charQueue);
    }

    onFightRoundBtnClick () {

        let attacker = this.props.state.first_strike_is > 0 ? this.props.state.stats : this.props.state.enemy;
        let defender = attacker == this.props.state.stats ? this.props.state.enemy : this.props.state.stats;

        let attack_round = (attacker.attack + Math.floor(Math.random()*11 + 2)) > defender.defence ? -2 : 0;
        let defence_round = ((defender.hits > 0) && (defender.attack + Math.floor(Math.random()*11 + 2)) > attacker.defence) ? -2 : 0;
        let round_results_attack = defender.hits + attack_round;
        let round_results_defence = attacker.hits + defence_round;

       // let my_hits = this.props.state.first_strike_is > 0 ? round_results_defence : round_results_attack;
     //   let enemy_hits = this.props.state.first_strike_is > 0 ? round_results_attack : round_results_defence;

        let round = this.props.state.round;
        let newRound = round+1;

            console.log('at_at ' + attacker.attack, round_results_attack, 'def_at '+ defender.attack, round_results_defence );
        let enemies = this.props.state.enemy;

        set(enemies, '[0].hits', 3);

        this.props.gameActions.kickEnemy( enemies, newRound);
    }

    render() {

    console.log( this.props.state.stats.hits);
        let setQueue = ::this.onSetQueueBtnClick;
        let figth_round = ::this.onFightRoundBtnClick;




        return <Battle state={this.props.state}
                       gameActions={this.props.gameActions}
                       setQueue={setQueue}
                       figth_round={figth_round}
                        />
    }
}

export default BattleContainer