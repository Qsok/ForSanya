/**
 * Created by Kru on 06.01.2018.
 */
import React from 'react'
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import App from '../views/home'

export default () => (
    <Router history={browserHistory}>\
        <Route path="/" component={App}>
            <IndexRoute component={App}/>
        </Route>
    </Router>
)