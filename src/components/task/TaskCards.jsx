import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import AddTaskCardButton from './button/AddTaskCardButton'
import TaskCard from './TaskCard'

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: "0",
      draggableId: "item0"
    }
  ]);

  return (
    <DragDropContext>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided) => (
          <div className='taskCardsArea'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard) => (
              <TaskCard
              key={taskCard.id}
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
              />
              ))}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TaskCards