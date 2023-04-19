import React from 'react'

import { Task } from './Task'

export const Tasks = ({
  inputText,
  taskList,
 }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div>
          <Task />
        </div>
      ))}
    </div>
  )
}
