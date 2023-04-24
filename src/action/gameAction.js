import {SUCCESS,FAIL} from "../constant/constant";
import axios from "axios";

const gameList= ()=>async (dispatch) =>{
        try{
            const {data} =await axios.get("/gamedata.json")
            console.log(data.gamedatas);
            
            dispatch(
                {
                    payload:data.gamedatas,
                    type:SUCCESS
                }
            )
        } 
        catch(error){
            dispatch(
                {
                    payload:error,
                    type:FAIL
                }
            )
        }
    };
    
    export default gameList;