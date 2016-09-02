import React, { Component } from 'react'
import { connect } from 'react-redux'
import Main_area from './main_area'
//import styles from './main_area.css';

class App extends Component {
    render() {
        const { name, surname, age, p_id } = this.props.game;
        return <div  >
        <Main_area
            name={name}
            surname={surname}
            age={age}
            p_id={p_id}
        />
        </div>
    }
}

function mapStateToProps (state) {
    return {
        game: state
    }
}

export default connect(mapStateToProps)(App)