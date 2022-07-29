// Action Types
import axios from "axios";

const FETCH_ALL = "FETCH_ALL";
const FETCH_FAIL = "FETCH_FAIL";


// Action Creators
//export const testAction = (text) => ({ type: TEST, text });
export const testAction = () => {
    return (dispatch) => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(({ data }) => dispatch({ type: FETCH_ALL, user: data }))
            .catch((err) => dispatch({ type: FETCH_FAIL, error: err }));
    };
};

// Initial State
// const initialState = [];

const initialState = {
    user: [],
    error: ""
};

// Reducer
const test = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.user;
        case FETCH_FAIL:
            return { ...state, error: action.error };
        default:
            return state.user;
    }
};


export default test;