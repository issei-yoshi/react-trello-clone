import React from 'react'

export const TaskCardDeleteButton = ({ taskCardsList, setTaskCardsList, taskCard }) => {
  const taskCardDeleteButton = () => {

  };

  return (
    <div>
      <button className='taskCardDeleteButton'>
        <i className='fas fa-times' onClick={() => taskCardDeleteButton()}></i>
      </button>
    </div>
  )
}
