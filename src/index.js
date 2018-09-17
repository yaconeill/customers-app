import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootCompomponent = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(rootCompomponent, document.getElementById('root'));
registerServiceWorker();
