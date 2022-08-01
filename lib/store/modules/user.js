// Action Types
import axios from "axios";

const FETCH_ALL = "FETCH_ALL";
const FETCH_FAIL = "FETCH_FAIL";

const initialState = {
    user: [],
    error: ""
};

// Action Creators
export const fetchDataAsync  = () => {
    return (dispatch) => {
        axios
            .get("/api/user/auth")
            .then(({ data }) => dispatch({ type: FETCH_ALL, user: data }))
            .catch((err) => dispatch({ type: FETCH_FAIL, error: err }));
    };
};

// Reducer
const fetchReducer  = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.user;
        case FETCH_FAIL:
            return { ...state, error: action.error };
        default:
            return state.user;
    }
};


export default fetchReducer;