import { FAIL, SUCCESS } from "../constant/constant";


export const gameReducer=(state={gamedataList:[]},action)=>{
    switch(action.type){
        case SUCCESS:
            return{
                gamedataList:action.payload
            }
        case FAIL:
            return{
                gamedataList:action.payload
            }  
        default:
            return state  
    }
}