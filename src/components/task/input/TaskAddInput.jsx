import React from 'react'

export const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='add a task' className='taskAddInput' />
      </form>
    </div>
  )
}
