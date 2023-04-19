import React from 'react'

export const TaskCardDeleteButton = ({ taskCardsList, setTaskCardsList, taskCard }) => {
  const taskCardDeleteButton = (id) => {
    //タスクカードを削除
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button className='taskCardDeleteButton'>
        <i className='fas fa-times' onClick={() => taskCardDeleteButton(taskCard.id)}></i>
      </button>
    </div>
  )
}
