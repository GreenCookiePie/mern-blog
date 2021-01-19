import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducers/reducers";

// redux store
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
