import { combineReducers, createStore } from "redux";
import { SignUpReducer } from "./reducers/reducer";

const rootReducer = combineReducers({
    signUp:SignUpReducer
});

const store = createStore(rootReducer);
export default store;