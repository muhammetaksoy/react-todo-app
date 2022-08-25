import React from 'react'

const TodoList = ({ todos, onClickDelete }) => {
    return (
        <div className='todo-container'>
            {
                todos.map((item, index) => {
                    return <div key={index} className='todo-item'>
                        <p>{item}</p>
                        <button onClick={() => {
                            onClickDelete(index)
                        }}>Delete</button>
                    </div>
                })
            }
        </div>
    )
}

export default TodoList