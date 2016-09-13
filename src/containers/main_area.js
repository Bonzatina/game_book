import React, { Component } from 'react'
import Paragraphes from './paragraphes'
import BattleContainer from './battleContainer'
import RightPanelContainer from './RightPanelContainer'

class Main_area extends Component {
    onParBtnClick(e) {
        let p_id = this.props.state.p_id;
        this.props.gameActions.setParagraph( typeof e.target.value !== 'undefined' ? e.target.value : p_id)
    }

    onStartFightBtnClick() {

        let p_id = this.props.state.p_id;

        let enemies = Paragraphes[p_id].enemy;


        let char_speed = this.props.state.stats.speed;
        let fight_queue = char_speed+Math.floor(Math.random()*11 + 2);

        let battle = {
            enemies: enemies
        };

        this.props.gameActions.startBattle(battle);
    }

    render() {
        let p_id = this.props.state.p_id;
        let state = this.props.state;
        let gameActions  = this.props.gameActions;
        let new_p_id = ::this.onParBtnClick;
        let start_battle = ::this.onStartFightBtnClick;


        return <div className='main_area'>

        <div className='paragraph_area'>
            <div onClick={new_p_id}>{typeof this.props.state.battle === 'undefined' ? Paragraphes[p_id].p_text : null}</div>

            {typeof Paragraphes[p_id].battle !== 'undefined' && typeof this.props.state.battle === 'undefined' ?   <button onClick={start_battle}>Начать бой</button>  : null}

        </div>
            {typeof this.props.state.battle !== 'undefined' ? <BattleContainer state={state} gameActions={gameActions}/> : null}
            <RightPanelContainer />
            </div>
    }
}

export default Main_area