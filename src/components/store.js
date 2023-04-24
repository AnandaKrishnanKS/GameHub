import { applyMiddleware, combineReducers, createStore } from "redux";
import { gameReducer } from "../reducer/gameReducer";
import thunk from "redux-thunk";



const reducer = combineReducers(
    {
        gamesReducer: gameReducer,
    }
)

const middleware =[thunk]

const store = createStore(reducer,applyMiddleware(...middleware))

export default store
