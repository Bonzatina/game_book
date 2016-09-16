import React, { Component } from 'react'
import Paragraphes from './paragraphes'
import BattleContainer from './battleContainer'
import RightPanelContainer from './RightPanelContainer'

class Main_area extends Component {
    onParBtnClick(e) {

        let p_id = this.props.state.p_id;
        let battle_is_over  = this.props.state.battle_is_over;

        let new_battle_is_over = typeof e.target.value !== 'undefined' ? undefined : battle_is_over;
        let new_p_id = typeof e.target.value !== 'undefined' ? e.target.value : p_id;

        this.props.gameActions.setParagraph(new_p_id, new_battle_is_over)
    }

    onStartBattleClick() {

        let p_id = this.props.state.p_id;

        let char = this.props.state.stats;
        let new_enemies = Paragraphes[p_id].enemy.slice();

        new_enemies.push(char);

        let battle = {
            enemies: new_enemies
        };

        this.props.gameActions.startBattle(battle);
    }

    render() {
        let p_id = this.props.state.p_id;

        let battle_is_over = this.props.state.battle_is_over;
        let battle_is_set = this.props.state.battle;

        let state = this.props.state;
        let gameActions  = this.props.gameActions;

        let setNewP_id = ::this.onParBtnClick;
        let startBattle = ::this.onStartBattleClick;


        return <div className='main_area'>

        <div className='paragraph_area'>
            <div onClick={setNewP_id}>{typeof battle_is_set === 'undefined' ? Paragraphes[p_id].p_text : null}</div>

            {typeof Paragraphes[p_id].battle !== 'undefined' &&
            typeof this.props.state.battle === 'undefined' &&
            battle_is_over !== true ? <button onClick={startBattle}>Начать бой</button>  : null}

            <div onClick={setNewP_id}>{battle_is_over ? Paragraphes[p_id].p_text_afterBattle : null}</div>

        </div>
            {typeof this.props.state.battle !== 'undefined' ? <BattleContainer state={state} gameActions={gameActions}/> : null}
            <RightPanelContainer state={state} gameActions={gameActions} />
            </div>
    }
}

export default Main_area