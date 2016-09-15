import React, { Component } from 'react'


class Battle extends Component {

    render() {



        let setQueue = this.props.setQueue;
        let getKick = this.props.getKick;

        let enemies = this.props.state.battle.enemies;
        let char = this.props.state.stats;
        let fighting_char = find(enemies, char.name) || char;
            // let fullFightQueue = this.props.fullFightQueue;

        function find(array, value) {

            for (var i = 0; i < array.length; i++) {
                if (array[i].name == value) return Object.assign({}, array[i], {index: i});
            }
        }
       // console.log(fighting_char);

        return <div className='battle'>
                <div className='enemies'>
                    {enemies.map(function (enemy, index) {
                    return enemy.name !== char.name ? <div key={index}> <div className='enemy' >{enemy.name}<br/> Жизнь: {enemy.hits}</div>
                            <button className='inic_button' value={index} onClick={getKick}>Атаковать! </button>
                        <div>Атака: {enemy.attack}</div>
                        <div>Защита: {enemy.defence}</div>
                        <div>Скорость: {enemy.speed}</div>
                        </div> : null;})}
                </div>

            {this.props.state.stats.fight_queue == false ?
                <button className='inic_button' onClick={setQueue}>Броски инициативы</button> :
                <div className='log_window'><button className='inic_button' value={fighting_char.index} onClick={getKick}>Защищаться! </button> sdfedses</div>}

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