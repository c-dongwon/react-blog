import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import fetchReducer  from "./user";


const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;

        default:
            return combineReducers({ users: fetchReducer })(state, action);
    }
};


export default rootReducer;