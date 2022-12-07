import { applyMiddleware, createStore } from "redux";
import { ADD_TODO } from "./actions";
import rootReducer from "./reducer";


// Currying function is a function return another function
// Higher Order Function
// function myMiddleWare(store) {
//     return function(next) {
//         return function(action) {
            
//         }
//     }
// }

const myMiddleWare = store => next => action => {
    if(action.type === ADD_TODO && action.payload === 'fuck') {
        action.payload = '****'
    }
    return next(action)
}


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store