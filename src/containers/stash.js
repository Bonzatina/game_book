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
            return {name: fighter.name, attack: fighter.attack, defence: fighter.defence, hits: fighter.hits, fight_queue: fighter.fight_queue}
        });
        let battleWithQueue= {enemies: enemiesWithQueue, fullFightQueueNames: fullFightQueueNames, current_queue: 0 };

        this.props.gameActions.setQueue(battleWithQueue, charQueue);
    }

    onGetKickBtnClick (e) {

        let en_in = e.target.value;

        let fight_queue = this.props.state.battle.fullFightQueueNames;
        let current_queue = this.props.state.battle.current_queue;
        let new_current_queue = current_queue < fight_queue.length-1 ? current_queue+1 : 0;
        let char = this.props.state.stats;

        let attacker = fight_queue[current_queue];
        let defender = attacker.name === char.name ? fight_queue[en_in] : char;

        let attack_round = (attacker.attack + Math.floor(Math.random()*11 + 2)) > defender.defence ? -2 : 0;


        let round_results = defender.hits + attack_round;



        console.log(defender);

        set(fight_queue, '['+en_in+'].hits', round_results);

        this.props.gameActions.getKick(fight_queue, new_current_queue);
    }

    render() {

        console.log( this.props.state.stats.hits);
        let setQueue = ::this.onSetQueueBtnClick;
        //let figth_round = ::this.onFightRoundBtnClick;
        let getKick = ::this.onGetKickBtnClick;



        return <Battle state={this.props.state}
                       gameActions={this.props.gameActions}
                       setQueue={setQueue}
                       getKick={getKick}

        />
    }
}

export default BattleContainer