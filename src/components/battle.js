import React, { Component } from 'react'


class Battle extends Component {

    render() {



        let setQueue = this.props.setQueue;
        let enemies = this.props.state.battle.enemies;
        let char = this.props.state.stats;
       // let fullFightQueue = this.props.fullFightQueue;
       // console.log(enemies);

        return <div className='battle'>
                <div className='enemies'>
                    {enemies.map(function (enemy, index) {
                    return <div key={index}> <div className='enemy' >{enemy.name}<br/> Жизнь: {enemy.hits}</div>
                        <div>Атака: {enemy.attack}</div>
                        <div>Защита: {enemy.defence}</div>
                        <div>Скорость: {enemy.speed}</div>
                        </div>;})}
                </div>

            {this.props.state.stats.fight_queue == false ?
                <button className='inic_button' onClick={setQueue}>Броски инициативы</button> :
                <div className="log_window"><button className='inic_button' onClick={setQueue}>Броски инициативы</button> sdfedses</div>}

           <div className='char_area'><div>
               <div>Атака: {char.attack}</div>
               <div>Защита: {char.defence}</div>
               <div>Скорость: {char.speed}</div>
               <div className='char'>{char.name} <br/>Жизнь: {char.hits}</div>
               </div>
           </div>
        </div>
    }
}

export default Battle