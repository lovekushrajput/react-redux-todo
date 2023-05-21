import Todo from './Todo';
import { connect } from 'react-redux'
import { useEffect, useState } from 'react';

function App(props) {
    const [state, setState] = useState(props.todos)


    useEffect(() => {
        setState(props.todos)
    }, [props.todos])

    const handleCheckbox = (id) => {
        let payload = { id }
        props.dispatch({ type: 'toggle', payload })

    }

    const handleFilterBtns = ({ target }) => {
        switch (target.innerText) {
            case 'All':
                setState(props.todos)
                break;
            case 'Active':
                setState(props.todos.filter((todo) => !todo.isChecked))
                break;
            case 'Completed':
                setState(props.todos.filter((todo) => todo.isChecked))
                break;
            case 'Clear Completed':
                props.dispatch({ type: 'clear_Completed' })
        }
    }


    const handleDelete = (id) => {
        let payload = { id }
        props.dispatch({ 'type': 'deleteTodo', payload })
    }


    return (
        <div className='flex items-center flex-col'>
            <div className='w-1/3 bg-gray-400 p-4'>
                <Todo />
                <ul>
                    {
                        state.map((todo) =>
                        (
                            <li className='flex justify-between' key={todo.id}>
                                <div className='flex gap-x-5'>
                                    <input
                                        type="checkbox"
                                        checked={todo.isChecked}
                                        className='border  border-black'
                                        readOnly
                                        onClick={() => handleCheckbox(todo.id)}
                                    />

                                    <p>{todo.name}</p>
                                </div>
                                <span onClick={() => handleDelete(todo.id)}>❌</span>
                            </li>
                        )
                        )
                    }
                </ul>

                {
                    props.todos.length !== 0 &&
                    <div className='flex justify-between mt-3'>
                        {['All', 'Active', 'Completed', 'Clear Completed'].map((btn) => (
                            <button
                                key={btn}
                                className='border px-2 py-1 text-gray-50 hover:bg-gray-600 hover:border-transparent rounded'
                                onClick={handleFilterBtns}
                            >{btn}</button>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        todos: state
    }
}


export default connect(mapStateToProps)(App)