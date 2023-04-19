import React, { useState } from 'react'

import AddTaskCardButton from './button/AddTaskCardButton'
import TaskCard from './TaskCard'

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([]);

  return (
    <div className='taskCardsArea'>
      <TaskCard />
      <AddTaskCardButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  )
}

export default TaskCards