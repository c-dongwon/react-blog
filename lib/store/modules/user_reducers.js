import {LOGIN_USER} from "../action/types"

const user = (state={}, action) => {
    switch(action.type){
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            break;
        default:
            return state;
            break;
    }
}

export default user;