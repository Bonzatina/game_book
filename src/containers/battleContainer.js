import React, { Component } from 'react'

import Battle from '../components/battle'
import set from 'lodash/set';

class BattleContainer extends Component {

    fullFightQueue (enemies, char) {


        enemies.push(char);

        function compareQueue(enemyA, enemyB) {
            return enemyB.fight_queue - enemyA.fight_queue;
        }

        return enemies.sort(compareQueue);
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

        let battleWithQueue= {enemies: fullFightQueue, current_queue: 0 };

        this.props.gameActions.setQueue(battleWithQueue, charQueue);
    }

    onGetKickBtnClick (e) {

        let enemy_index = e.target.value;

        let fight_queue = this.props.state.battle.enemies;

        let current_queue = this.props.state.battle.current_queue;
        let new_current_queue = current_queue < fight_queue.length-1 ? current_queue + 1 : 0;


        let char = this.props.state.stats;


       // console.log(fight_queue);

        let attacker = fight_queue[current_queue];
        let defender = attacker.name === char.name ? fight_queue[enemy_index] : char;

        let attack_round = (attacker.attack + Math.floor(Math.random()*11 + 2)) > defender.defence ? -2 : 0;


        let round_results = defender.hits + attack_round;



console.log(attacker.name, defender.name, round_results);

       set(fight_queue, '['+enemy_index+'].hits', round_results);

        let nextStateOfBattle= {enemies: fight_queue, current_queue: new_current_queue};

        this.props.gameActions.getKick(nextStateOfBattle);
    }

    render() {

  //  console.log( this.props.state.stats.hits);
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