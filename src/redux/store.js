import { createStore } from "redux";
import reducers from "./reducers/index";

export default function store(){
    return createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}