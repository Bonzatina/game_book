import React, { Component } from 'react'
import Paragraphes from './paragraphes'
import Battle from './battle'

class Main_area extends Component {
    onParBtnClick(e) {
        let p_id = this.props.p_id;
        this.props.setParagraph(+e.target.value ? +e.target.value : p_id)
    }
    render() {
        let p_id = this.props.state.p_id;
        let state = this.props.state;
        let new_p_id = ::this.onParBtnClick;

        let setEnemy = this.props.setEnemy;
        return <div className='ooo'>
            <div onClick={new_p_id}>{Paragraphes[p_id].p_text}</div>
            {Paragraphes[p_id].battle ? <Battle  state={state} setEnemy={setEnemy}/> : null}
        </div>
    }
}

export default Main_area