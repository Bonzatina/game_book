import React, { Component } from 'react'
import Paragraphes from './paragraphes'
import BattleContainer from './battleContainer'
import RightPanelContainer from './RightPanelContainer'

class Main_area extends Component {
    onParBtnClick(e) {
        let p_id = this.props.state.p_id;
        this.props.gameActions.setParagraph( typeof e.target.value !== 'undefined' ? e.target.value : p_id)
    }

    onStartBattleClick() {

        let p_id = this.props.state.p_id;

        let enemies = Paragraphes[p_id].enemy;

        let battle = {
            enemies: enemies
        };

        this.props.gameActions.startBattle(battle);
    }

    render() {
        let p_id = this.props.state.p_id;
        let state = this.props.state;
        let gameActions  = this.props.gameActions;

        let setNewP_id = ::this.onParBtnClick;
        let startBattle = ::this.onStartBattleClick;


        return <div className='main_area'>

        <div className='paragraph_area'>
            <div onClick={setNewP_id}>{typeof this.props.state.battle === 'undefined' ? Paragraphes[p_id].p_text : null}</div>

            {typeof Paragraphes[p_id].battle !== 'undefined' && typeof this.props.state.battle === 'undefined' ?   <button onClick={startBattle}>Начать бой</button>  : null}

        </div>
            {typeof this.props.state.battle !== 'undefined' ? <BattleContainer state={state} gameActions={gameActions}/> : null}
            <RightPanelContainer state={state} gameActions={gameActions} />
            </div>
    }
}

export default Main_area