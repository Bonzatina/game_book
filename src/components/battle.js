import React, { Component } from 'react'


class Battle extends Component {

    render() {

        let setQueue = this.props.setQueue;
        let getKick = this.props.getKick;

        let current_queue = this.props.gameState.battle.current_queue;
        let current_round = this.props.gameState.battle.current_round;
        let enemies = this.props.gameState.battle.enemies;
        let char = this.props.gameState.stats;
        let fighting_char = findChar(enemies, char.name);



        function findChar(array, value) {

            for (var i = 0; i < array.length; i++) {
                if (array[i].name == value) return Object.assign({}, array[i], {index: i});
            }
        }
       // console.log(fighting_char);

        return <div className='battle'>
                <div className='enemies'>
                    {enemies.map(function (enemy, index) {
                    return enemy.name !== char.name ? <div key={index}> <div className='enemy' >{enemy.name}<br/> Жизнь: {enemy.hits}</div>
                        <div>Атака: {enemy.attack}</div>
                        <div>Защита: {enemy.defence}</div>
                        <div>Скорость: {enemy.speed}</div>
                        { current_queue === fighting_char.index && current_queue !== false ? <button className='inic_button' value={index} onClick={getKick}>Атаковать! </button> : null}
                        </div> : null;})}
                </div>

            {typeof current_queue === 'undefined' ?
                <button className='inic_button' onClick={setQueue}>Броски инициативы</button> :
             <div className='log_window'> <p>{current_round}</p>
                 {current_queue !== fighting_char.index ?<button className='inic_button' value={fighting_char.index} onClick={getKick}>Защищаться! </button> : null}
                 sdfedses</div>}

           <div className='char_area'><div>
               <div>Атака: {fighting_char.attack}</div>
               <div>Защита: {fighting_char.defence}</div>
               <div>Скорость: {fighting_char.speed}</div>
               <div className='char'>{fighting_char.name} <br/>Жизнь: {fighting_char.hits}</div>
               </div>
           </div>
        </div>
    }
}

export default Battle