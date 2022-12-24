import React from 'react'
import {useDispatch} from 'react-redux'

const Form = () => {
    const dispatch = useDispatch()

    const addTodoHandler = () => {
      const todo = {
        id:'',
        text: '',
        completed: false,
      }
    }
    return (
        <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                placeholder='Type something...'
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
            >
                Submit
            </button>
        </form>
    )
}

export default Form
