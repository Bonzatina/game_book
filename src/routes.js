import React from 'react'
import { Route, IndexRoute } from 'react-router'


import App from './App'
import Main_area from './containers/main_area'
import TitlePage from './containers/TitlePage'
import Rules from './containers/Rules'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={TitlePage} />
            <Route path='/game' component={Main_area}/>
            <Route path='/rules' component={Rules}/>
    </Route>
    </div>
)