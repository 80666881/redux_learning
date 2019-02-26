import React from 'react';
import ReactDOM from 'react-dom';
import ControlPannel from './views/ControlPannel'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './Store.js';


ReactDOM.render(
    <Provider store={store}>
        <ControlPannel />
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
