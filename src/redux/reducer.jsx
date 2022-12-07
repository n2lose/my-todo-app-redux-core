import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/TodoListSlice";

const rootReducer = combineReducers({
    todoList: todoListReducer,
    filters: filtersReducer
})

export default rootReducer


