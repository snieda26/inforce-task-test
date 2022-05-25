import { createStore, combineReducers, applyMiddleware } from "redux";
import { productsReducer, commentsReducer } from "./reducers";


const rootReducer = combineReducers({
    products: productsReducer,
    comments: commentsReducer
})


export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

//@ts-ignore
window.getState = store.getState