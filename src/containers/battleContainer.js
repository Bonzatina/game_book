import React, { Component } from 'react'

import Battle from '../components/battle'
import set from 'lodash/set';


class BattleContainer extends Component {

    enemiesSortByQueue (enemies) {
        function compareQueue(enemyA, enemyB) {
            return enemyB.fight_queue - enemyA.fight_queue;
        }
        return enemies.sort(compareQueue);
    }

    onSetQueueBtnClick() {

        let enemies = this.props.gameState.battle.enemies;

        let enemiesWithSpeed = enemies.map(function (enemy) {
            return Object.assign({}, enemy, {fight_queue: enemy.speed + Math.floor(Math.random()*11 + 2)})
        });

        let enemiesSortByQueue = this.enemiesSortByQueue(enemiesWithSpeed);

        let battleWithQueue= {enemies: enemiesSortByQueue, current_queue: 0, current_round: 1 };

        this.props.gameActions.setQueue(battleWithQueue);
    }

    onGetKickBtnClick (e) {

        let enemy_index = e.target.value;

        let fight_queue = this.props.gameState.battle.enemies;

        let current_queue = this.props.gameState.battle.current_queue;
        let new_current_queue = current_queue < fight_queue.length-1 ? current_queue + 1 : 0;

        let current_round = this.props.gameState.battle.current_round;
        let new_current_round = current_queue == fight_queue.length-1 ? current_round + 1 : current_round;

       // console.log(fight_queue);

        let attacker = fight_queue[current_queue];
        let defender = fight_queue[enemy_index];

        let attack_round = (attacker.attack + Math.floor(Math.random()*11 + 2)) > defender.defence ? -2 : 0;

        let round_results = defender.hits + attack_round;

//console.log(attacker.name, defender.name, round_results);

       set(fight_queue, '['+enemy_index+'].hits', round_results);

        function findDead(array, value) {

            for (var i = 0; i < array.length; i++) {
                if (array[i].hits < value) return array.splice(i, 1);
            }
        }

        findDead(fight_queue, 1);

        //  console.log(fight_queue.length-1 );

        let nextStateOfBattle= {enemies: fight_queue, current_queue: new_current_queue, current_round: new_current_round};

        fight_queue.length > 1 ? this.props.gameActions.getKick(nextStateOfBattle) : this.props.gameActions.battleIsOver(fight_queue[0].hits, undefined, true);
    }

    render() {


        let setQueue = ::this.onSetQueueBtnClick;
        //let figth_round = ::this.onFightRoundBtnClick;
        let getKick = ::this.onGetKickBtnClick;



        return <Battle gameState={this.props.gameState}
                       gameActions={this.props.gameActions}
                       setQueue={setQueue}
                       getKick={getKick}

                        />
    }
}

export default BattleContainer