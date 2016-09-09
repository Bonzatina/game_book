import React, { Component } from 'react'
import Paragraphes from '../containers/paragraphes'

class Battle extends Component {

    render() {

        let p_id = this.props.state.p_id;
        let startFight = this.props.startFight;
        let figth_round = this.props.figth_round;
        let enemies = this.props.enemies;
        console.log(enemies);

        return <div className='battle'>

            {this.props.state.stats.fight_queue == false ?
                <button onClick={startFight}>Начать бой</button> : null}

            {this.props.state.stats.fight_queue != false ?
                <div>Результаты бросков инициативы:
                    <p>{this.props.state.stats.name}: {this.props.state.stats.fight_queue}</p>
                    {  enemies.map(function (enemy, index) {
                        return <p key={index}>{enemy.name}: {enemy.fight_queue}</p>;
                    })
                    }</div> : null}

            {this.props.state.stats.fight_queue != false ?
                <div>
                <button onClick={figth_round}>раунд: {this.props.state.round}</button> <br/>
                <p>Ваша жизнь: {this.props.state.stats.hits}</p>
                {  enemies.map(function (enemy, index) {
                    return <li key={index}>{enemy.name}: {enemy.hits}</li>;
                })
                }
            </div>: null}

            {this.props.state.stats.hits < 1 && <p>Вы погибли</p>}
            {(this.props.state.enemy && this.props.state.enemy.hits < 1) && <div>{Paragraphes[p_id].p_text_afterBattle}</div>}

        </div>
    }
}

export default Battle