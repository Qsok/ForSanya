import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM  from 'react-dom';
import AppRouter from './routes/routes';
import App from './views/home'
import './views/css/bootstrap.css';

var axios = require('axios');
axios.defaults.baseURL = 'http://localhost:8080';

const render = (Component) =>
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );

render(App);
if (module.hot) {
    module.hot.accept('./views/home', () => {
        console.log("index.js HMR");
        const NewApp = require('./views/home')
        render(<AppContainer><NewApp /></AppContainer>, document.getElementById('app'))
    })
}