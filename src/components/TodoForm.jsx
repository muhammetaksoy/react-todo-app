import React from 'react'
import { useState } from "react";
import { toast } from "react-toastify";
const TodoForm = ({ todos, setTodos }) => {
    const [todoValue, setTodoValue] = useState('');

    const inputOnChange = (event) => {
        setTodoValue(event.target.value);
    }

    const onClickAdd = (event) => {
        if (todoValue === '') {
            toast.error('You must fill the input');
        } else if (todoValue.includes(todos)) {
            toast.error('You must fill diffirent value');
        }
        else {
            setTodos([...todos, todoValue]);
            setTodoValue('');
            toast.success('Added successfully...');
        }
    }


    return (
        <form action="" id='todo-form'>
            <input
                type="text"
                id='form-input'
                placeholder='Enter your todo'
                onChange={inputOnChange}
                value={todoValue}
            />
            <button onClick={(event) => {
                event.preventDefault();
                onClickAdd()
            }}>Add</button>
        </form>
    )
}

export default TodoForm