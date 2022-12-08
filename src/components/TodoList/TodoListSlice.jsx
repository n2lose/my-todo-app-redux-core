import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../../redux/actions";

const initialTodoListState =  [{
    "id": 'fb0c924d-2454-5454-ba66-7ae0d9a7ab38',
    "name": "sollicitudin ut suscipit a feugiat et eros",
    "priority": "Medium",
    "completed": false
  }, {
    "id": '57ce9cb7-ab3d-58cf-a926-f670bddc8e3b',
    "name": "pede ullamcorper augue a suscipit nulla",
    "priority": "High",
    "completed": false
  }, {
    "id": '0d557645-cef5-5f0e-b6da-e7b881427a37',
    "name": "metus sapien ut nunc vestibulum",
    "priority": "Low",
    "completed": false
  }, {
    "id": '9934b332-8287-5d7a-a855-b5546dfd643d',
    "name": "sit amet diam in magna",
    "priority": "Medium",
    "completed": false
  }, {
    "id": '4f6572b2-b38e-5cb4-85be-395f35c54f4b',
    "name": "in lectus pellentesque at nulla suspendisse potenti cras",
    "priority": "Low",
    "completed": false
  }]

const todoListReducer = (state = initialTodoListState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case TOGGLE_TODO:
            return state.map(todo => (todo.id === action.payload) ? {...todo, completed: !todo.completed} : todo )
        case DELETE_TODO :
            return [...state].filter((todo)=> todo.id != action.payload)
        default:
            return state
    }
}

export default todoListReducer