import React, { Component } from 'react'
import Paragraphes from './paragraphes'
import BattleContainer from './battleContainer'

class Main_area extends Component {
    onParBtnClick(e) {
        let p_id = this.props.state.p_id;
        this.props.gameActions.setParagraph( typeof e.target.value !== 'undefined' ? e.target.value : p_id)
    }
    render() {
        let p_id = this.props.state.p_id;
        let state = this.props.state;
        let gameActions  = this.props.gameActions;
        let new_p_id = ::this.onParBtnClick;



        return <div className='paragraph_area'>
            <div onClick={new_p_id}>{Paragraphes[p_id].p_text}</div>
            {typeof Paragraphes[p_id].battle !== 'undefined' ? <BattleContainer  state={state} gameActions={gameActions}/> : null}
        </div>
    }
}

export default Main_area