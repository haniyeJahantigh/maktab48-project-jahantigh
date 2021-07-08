import { ActionTypes } from "../constats/action-type";

const initialState={
   token:"",
}
export const tokenReduser=(state=initialState , {type,payload})=>{
    switch (type) {
        case ActionTypes.SET_TOKEN:
            return {...state,token: payload};
        default:
            return state;
    }
    

}