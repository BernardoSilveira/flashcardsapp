import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import {fetchWords} from "./handleWords";
//import reportWebVitals from './reportWebVitals';

/*fetch('/api/words')
    .then(res => res.json())
    .then(word => initState.words = word);*/



//console.log(store.getState());
fetchWords();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
