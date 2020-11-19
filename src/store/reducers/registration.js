import {REG_SUCCESS} from "../actions/actionTypes";

const initialState = {
    isReg: false
}

export default function registrationReducer(state = initialState, action) {
    switch (action.type) {
        case REG_SUCCESS :
            return {
                isReg: action.isReg
            }
        default:
            return state
    }
}