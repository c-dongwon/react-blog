// Action Types
import axios from "axios";

const FETCH_ALL = "FETCH_ALL";
const FETCH_FAIL = "FETCH_FAIL";


// Action Creators

export const getUser = () => {
    return (dispatch) => {
        axios
            .get("/api/user/auth")
            .then(({ data }) => dispatch({ type: FETCH_ALL, user: data }))
            .catch((err) => dispatch({ type: FETCH_FAIL, error: err }));
    };
};

const initialState = {
    user: [],
    error: ""
};

// Reducer
const user = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.user;
        case FETCH_FAIL:
            return { ...state, error: action.error };
        default:
            return state.user;
    }
};


export default user;