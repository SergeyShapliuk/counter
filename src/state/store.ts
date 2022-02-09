import {combineReducers, createStore} from "redux";
import {stateReducer} from "./stateReducer";


const rootReducer=combineReducers({
state: stateReducer
})
export const store=createStore(rootReducer);

export type AppRootStateType=ReturnType<typeof rootReducer>

// @ts-ignore
window.store=store