import { createSelector } from "reselect"

export const searchTextSelector = (state) => state.filters.search
export const statusSelector = (state) => state.filters.status
export const prioritiesSelector = (state) => state.filters.priorities
export const todoListSelector = (state) => state.todoList

export const todoListRemainingSelector = createSelector(todoListSelector, statusSelector, searchTextSelector, prioritiesSelector, (
    todoList, status, searchText, priorities) => {
        return todoList.filter((todo) => {
            if(status === 'All') {
                return priorities.length ? 
                    todo.name.includes(searchText) && priorities.includes(todo.priority) : 
                    todo.name.includes(searchText)
            }

            return todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
        })
    }
)