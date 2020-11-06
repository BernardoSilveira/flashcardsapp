import {FLIP_FLASHCARD, LOAD_WORDS} from "./actionTypes";

const initState = {
    selectedWordId: 0,
    czech_language: true,
    rightGuess: 0,
    wrongGuess: 0,
    isFetching: false,
    error: null
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_WORDS.START_FETCH:
            return {...state, ...state.words, isFetching: true};
        case LOAD_WORDS.FAIL_FETCH:
            return {...state, ...state.words, isFetching: false, error: action.payload};
        case LOAD_WORDS.FINISH_FETCH:
            return {...state, isFetching: false, words: action.payload, error: null};
        case FLIP_FLASHCARD:
            const cardFliped = !state.czech_language;
            return {...state, czech_language: cardFliped};
        default:
            return state;
    }
};

export default rootReducer;