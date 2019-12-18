/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/createStore';
import App from './App';
const store = configureStore();

render(
    <Provider store={store} history={history}>
        <App />
    </Provider>,
    document.getElementById('root')
);

/*
if (module.hot) {
    module.hot.accept('./App', () => {
        const NewRoot = require('./App').default;
        render(
            <Provider></Provider>
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
*/
