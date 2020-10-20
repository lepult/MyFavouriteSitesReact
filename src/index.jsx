import ReactDOM from 'react-dom';
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Constants
import { IS_DEVELOPMENT } from './constants/environment';

// Components
import App, { HotApp } from './components/App';
import rootReducer from './redux-modules/reducer/rootReducer';

const middlewares = [thunk];

if (IS_DEVELOPMENT) {
    // eslint-disable-next-line global-require
    const { createLogger } = require('redux-logger');
    middlewares.push(createLogger({
        duration: true,
    }));
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
);

// Get tapp element
const tappElement = document.querySelector('.tapp');

// Render App component into tapp element
// If mode is development the component will be used from hot export of App
const render = () => {
    ReactDOM.render(
        <Provider
            store={store}
        >
            {IS_DEVELOPMENT ? <HotApp/> : <App/>}
        </Provider>,
        tappElement,
    );
};

// Call render function after chayns is ready
chayns.ready.then(render).catch((error) => {
    // eslint-disable-next-line no-console
    console.warn('No chayns environment found.', error);
});
