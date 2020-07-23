import { createStore } from "redux";
import rootReducer from "../reducers";

let currentStore;

export default function configureStore(initialState?: {}) {
    const store =  createStore(
        rootReducer,
        initialState
    );

    currentStore = store;
    return store;
}

export function dispatch({ type: string, ...rest }) {
    return currentStore.dispatch.apply(currentStore, arguments);
}

export function getCurrentState () {
    return currentStore.getState();
}
