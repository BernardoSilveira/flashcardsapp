import {ADD_WORD, FLIP_FLASHCARD, INCREMENT, LOAD_WORDS} from "./actionTypes";

const rootReducer = (state, action) => {
    const {selectedWordIndex, words, isCardFliped, rightCounter, wrongCounter} = state;

    const nextWordIndex = () => {
        if (selectedWordIndex <= (words.length - 2)) {
            return selectedWordIndex + 1;
        } else {
            return 0;
        }
    };

    switch (action.type) {
        case LOAD_WORDS.START_FETCH:
            return {...state, ...words, isFetching: true};
        case LOAD_WORDS.FAIL_FETCH:
            return {...state, ...words, isFetching: false, error: action.payload};
        case LOAD_WORDS.FINISH_FETCH:
            return {...state, isFetching: false, words: action.payload, error: null};
        case FLIP_FLASHCARD:
            return {...state, isCardFliped: !isCardFliped};
        case INCREMENT.RIGHT_COUNTER:
            return {
                ...state,
                rightCounter: rightCounter + 1,
                selectedWordIndex: nextWordIndex(),
                isCardFliped: !isCardFliped
            };
        case INCREMENT.WRONG_COUNTER:
            return {
                ...state,
                wrongCounter: wrongCounter + 1,
                selectedWordIndex: nextWordIndex(),
                isCardFliped: !isCardFliped
            };
        case ADD_WORD:
            return {
                ...state,
                words: words.concat({
                    word_id: words.length,
                    czech_word: action.payload1,
                    english_word: action.payload2
                })
            }
        default:
            return state;
    }

};

export default rootReducer;