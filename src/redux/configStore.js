import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import bucket from "./modules/bucket";

const middlewares = [thunk];
const rootReducer = combineReducers({bucket});// 리듀서들을 묶어준다. 지금은 하나라 버킷하나만 넣음
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);


export default store; 
