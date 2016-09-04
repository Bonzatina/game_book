import React, { Component } from 'react'
import Paragraphes from './paragraphes'
import Battle from './battle'

class Main_area extends Component {
    onParBtnClick(e) {
        let p_id = this.props.p_id;
        this.props.setParagraph(+e.target.value ? +e.target.value : p_id)
    }
    render() {
        let p_id = this.props.p_id;
        let stats = this.props.stats;
        let new_p_id = ::this.onParBtnClick;
        return <div className='ooo'>
            <div onClick={new_p_id}>{Paragraphes[p_id].p_text}</div>
            {Paragraphes[p_id].battle ? <Battle p_id={p_id} stats={stats}/> : null}
        </div>
    }
}

export default Main_area