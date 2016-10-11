import React, { Component } from 'react'
import Paragraphes from './paragraphes'
import BattleContainer from './battleContainer'
import RightPanelContainer from './RightPanelContainer'

class Main_area extends Component {
    state = {
        chit_menu_active: false,
    };
    onParBtnClick(e) {

        let p_id = this.props.gameState.p_id;
        let battle_is_over  = this.props.gameState.battle_is_over;

        let new_battle_is_over = typeof e.target.value !== 'undefined' ? undefined : battle_is_over;
        let new_p_id = typeof e.target.value !== 'undefined' ? e.target.value : p_id;

        this.props.gameActions.setParagraph(new_p_id, new_battle_is_over)
    }

    onStartBattleClick() {

        let p_id = this.props.gameState.p_id;

        let char = this.props.gameState.stats;
        let new_enemies = Paragraphes[p_id].enemy.slice();

        new_enemies.push(char);

        let battle = {
            enemies: new_enemies
        };

        this.props.gameActions.startBattle(battle);
    }

    onOpenChitMenuBtnClick() {

        this.setState({chit_menu_active: !this.state.chit_menu_active})

    }

    handleTitleField(event) {
        let value = event.target.value;

        let new_battle_is_over =  this.props.gameState.battle_is_over;
        let new_p_id = value || this.props.gameState.p_id;

        this.props.gameActions.setParagraph(new_p_id, new_battle_is_over)
    }

    render() {
        let p_id = this.props.gameState.p_id;

        let battle_is_over = this.props.gameState.battle_is_over;
        let battle_is_set = this.props.gameState.battle;

        let gameState = this.props.gameState;
        let gameActions  = this.props.gameActions;

        let setNewP_id = ::this.onParBtnClick;
        let startBattle = ::this.onStartBattleClick;
        let openChitMenu = ::this.onOpenChitMenuBtnClick;


        return <div className='main_area'>
            <button className='chit_button' onClick={openChitMenu}></button>
            {this.state.chit_menu_active ? <div className='chit_menu'>
                <input type="text" name='par'  onChange={this.handleTitleField.bind(this)}/>
            </div> : null}

            {typeof this.props.gameState.battle === 'undefined' ? <div className='paragraph_area'>
            <div onClick={setNewP_id}>{typeof battle_is_set === 'undefined' ? Paragraphes[p_id].p_text : null}</div>

            {typeof Paragraphes[p_id].battle !== 'undefined' &&
            typeof this.props.gameState.battle === 'undefined' &&
            battle_is_over !== true ? <button onClick={startBattle}>Начать бой</button>  : null}

            <div onClick={setNewP_id}>{battle_is_over ? Paragraphes[p_id].p_text_afterBattle : null}</div>

        </div> : null}
            {typeof this.props.gameState.battle !== 'undefined' ? <BattleContainer gameState={gameState} gameActions={gameActions}/> : null}
            <RightPanelContainer gameState={gameState} gameActions={gameActions} />
            </div>
    }
}

export default Main_area