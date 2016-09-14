import React, { Component } from 'react'


class RightPanelBattle extends Component {

    render() {
        let char = this.props.state.stats;
        let enemies = this.props.state.battle.enemies;
        let fight_queue = this.props.state.battle.fullFightQueueNames;

        return <div className='right_panel_battle'>
            <div className='right_panel_battle__enemy'>{enemies[0].name}</div>

            <div className='right_panel_battle__queue'>{this.props.state.stats.fight_queue !== false ?
                <div>Результаты бросков инициативы:

                    {  fight_queue.map(function (fighter, index) {
                        return <p key={index}>{fighter.name}: {fighter.fight_queue}</p>;
                    })
                    }</div> : null}</div>

            <div className='right_panel_battle__char'>{char.name}</div>

        </div>

    }
}

export default RightPanelBattle