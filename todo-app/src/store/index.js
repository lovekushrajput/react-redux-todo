import { createStore } from 'redux';


function reducer(state = [], action) {
    switch (action.type) {
        case 'addTodo':
            return state.concat(action.payload)
        case 'deleteTodo':
            return state.filter((todo) => todo.id !== action.payload.id)
        case 'toggle':
            return state.filter((todo) => {
                if (todo.id === action.payload.id) {
                    todo.isChecked = todo.isChecked ? false : true
                    return todo
                }
                return todo
            })
        case 'clear_Completed':
            return state.filter((todo) => !todo.isChecked)
        default:
            return state
    }
}

let store = createStore(reducer)
export default store