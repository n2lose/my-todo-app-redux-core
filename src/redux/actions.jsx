export const ADD_TODO = 'todoList/ADD_TODO'
export const TOGGLE_TODO = 'todoList/TOGGLE_TODO'
export const DELETE_TODO = 'todoList/DELETE_TODO'
export const FILTER_SEARCH = 'filter/search'
export const FILTER_STATUS = 'filter/status'
export const FILTER_PRIORITIES = 'filter/priorities'

// creators
export const addTodo = (todo)=> {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const toggleTodo = (index)=> {
    return {
        type: TOGGLE_TODO,
        payload: index
    }
}

export const deleteTodo = (todoId)=> {
    return {
        type: DELETE_TODO,
        payload: todoId
    }
}

export const filterSearch = (text)=> {
    return {
        type: FILTER_SEARCH,
        payload: text
    }
}

export const filterStatus = (status)=> {
    return {
        type: FILTER_STATUS,
        payload: status
    }
}

export const filterPriorities = (priorities)=> {
    return {
        type: filterPriorities,
        payload: priorities
    }
}

