import {createStore} from "redux";
import rootReducer from "./reducers";

const initState = {
    selectedWordIndex: 0,
    czech_language: true,
    rightGuess: 0,
    wrongGuess: 0,
    isFetching: false,
    error: null
};

const store = createStore(rootReducer, initState)

export default store

