import store from "./redux/store";
import {failFetchWords, finishFetch, startFetchWords} from "./redux/actions";

export const fetchWords = async() =>  {
    const {dispatch} = store;

    dispatch(startFetchWords());

    try {
        const data = await fetch("./api/words/load")
            .then(res => res.json());
        dispatch(finishFetch(data));
    } catch (e) {
        dispatch(failFetchWords(e));
    }
}

export const saveWords = (czechWord, englishWord) => {
    const data = {
        czech_word: czechWord,
        english_word: englishWord
    }

    fetch("./api/words/add",
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        //.then(res => res.json())
        //.then(data1 => console.log(data1))
        .catch(err => console.log(err));
}
