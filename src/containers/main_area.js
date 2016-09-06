import React, { Component } from 'react'
import Paragraphes from './paragraphes'
import Battle from './battle'

class Main_area extends Component {
    onParBtnClick(e) {
        let p_id = this.props.p_id;
        this.props.gameActions.setParagraph(+e.target.value ? +e.target.value : p_id)
    }
    render() {
        let p_id = this.props.state.p_id;
        let state = this.props.state;
        let gameActions  = this.props.gameActions;
        let new_p_id = ::this.onParBtnClick;

        return <div className='paragraph_area'>
            <div onClick={new_p_id}>{Paragraphes[p_id].p_text}</div>
            {typeof Paragraphes[p_id].battle !== 'undefined' ? <Battle  state={state} gameActions={gameActions}/> : null}
        </div>
    }
}

export default Main_area