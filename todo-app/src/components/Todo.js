import { connect } from 'react-redux'
import { useState } from 'react'


let count = 0
function Todo(props) {


    const handleInput = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            count++
            const payload = {
                name: e.target.value,
                isChecked: false,
                id: count
            }
            props.dispatch({ type: 'addTodo', payload })
            e.target.value = ''
        }
    }


    return (
        <input
            type="text"
            placeholder='Enter your todo'
            name='todo'
            onKeyUp={handleInput}
            className='border w-full' />

    )
}


export default connect()(Todo);