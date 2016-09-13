import React, { Component } from 'react'
import Paragraphes from '../containers/paragraphes'

class Battle extends Component {

    render() {

        let p_id = this.props.state.p_id;
        let startFight = this.props.startFight;
        let figth_round = this.props.figth_round;
        let enemies = this.props.state.battle.enemies;
        let char = this.props.state.stats;
        console.log(enemies);

        return <div className={typeof this.props.state.battle !== 'undefined' ? 'battle' : 'display_none'}>
            {this.props.state.battle !== 'undefined'?
                <div className='enemies'>
                    {enemies.map(function (enemy, index) {
                    return <div> <div className='enemy' key={index}>{enemy.name}<br/> Жизнь: {enemy.hits}</div>
                        <div>Атака: {enemy.attack}</div>
                        <div>Защита: {enemy.defence}</div>
                        </div>;})}
                </div>  : null}

            {this.props.state.stats.fight_queue == false ?
                <button className="inic_button" onClick={startFight}>Броски инициативы</button> : null}

           <div className='char_area'><div>
               <div>Атака: {char.attack}</div>
               <div>Защита: {char.defence}</div>
               <div className="char">{char.name} <br/>Жизнь: {char.hits}</div>
               </div>
           </div>

            {this.props.state.stats.fight_queue != false ?
                <div>Результаты бросков инициативы:
                    <p>{this.props.state.stats.name}: {this.props.state.stats.fight_queue}</p>
                    {  enemies.map(function (enemy, index) {
                        return <p key={enemy.name}>{enemy.name}: {enemy.fight_queue}</p>;
                    })
                    }</div> : null}

            {this.props.state.stats.fight_queue != false ?
                <div>
                <button onClick={figth_round}>раунд: {this.props.state.round}</button> <br/>
                <p>Ваша жизнь: {this.props.state.stats.hits}</p>

            </div>: null}



        </div>
    }
}

export default Battle