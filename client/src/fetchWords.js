import store from "./redux/store";
import {failFetchWords, finishFetch, startFetchWords} from "./redux/actions";

const fetchWords = async() =>  {
    const {dispatch} = store;

    dispatch(startFetchWords());

    try {
        const data = await fetch('./api/words')
            .then(res => res.json());
        dispatch(finishFetch(data))
    } catch (e) {
        dispatch(failFetchWords());
    }
}

export default fetchWords;