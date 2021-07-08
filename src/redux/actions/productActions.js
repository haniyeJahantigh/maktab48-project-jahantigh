import { ActionTypes } from "../constats/action-type"

export const setToken=(token)=>{
    return{
        type: ActionTypes.SET_TOKEN,
        payload:token,
    }
}
