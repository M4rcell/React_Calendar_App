import { types } from "../types/types";

const initialState = {
    checkeng:true,
    //uid:null,
    //name:null
}

export const authReducer = (state=initialState,action) => {
   
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                checkeng:false,
                ...action.payload
            }
        case types.authCheckingFinish:
            return{
                ...state,
                checkeng:false,
            }    
        default:
            return state;
    }
}