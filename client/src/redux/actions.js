import {FLIP_FLASHCARD, INCREMENT, LOAD_WORDS} from "./actionTypes";

export const startFetchWords = () => ({
    type: LOAD_WORDS.START_FETCH
});

export const failFetchWords = (error) => ({
    type: LOAD_WORDS.FAIL_FETCH,
    payload: error
});

export const finishFetch = (data) => ({
    type: LOAD_WORDS.FINISH_FETCH,
    payload: data
});

export const flipFlashcard = {
    type: FLIP_FLASHCARD,
};

export const incrementRightCounter = {
    type: INCREMENT.RIGHT_COUNTER
};

export const incrementWrongCounter = {
    type: INCREMENT.WRONG_COUNTER
};
