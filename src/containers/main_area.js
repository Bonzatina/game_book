import React, { Component } from 'react'
import Paragraphes from './paragraphes'

class Main_area extends Component {
    render() {
let p_id = this.props.p_id;
        return <div>
            <p>Привет из App, {this.props.name} {this.props.surname}!</p>
            <p>Тебе уже {this.props.age} ?</p>
            <div>{Paragraphes[p_id]}</div>
        </div>
    }
}

export default Main_area