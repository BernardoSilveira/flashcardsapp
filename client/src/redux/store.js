import {createStore} from "redux";
import rootReducer from "./reducers";

const initState = {
    selectedWordIndex: 0,
    isCardFliped: false,
    rightCounter: 0,
    wrongCounter: 0,
    isFetching: false,
    error: null
};

const store = createStore(rootReducer,
    initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

