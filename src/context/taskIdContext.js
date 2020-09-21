import React, {useState, createContext} from 'react'

export const TaskIdContext = createContext();

export const TaskIdContextProvider = props => {
  const [taskId, setTaskId] = useState('');

  return (
    <TaskIdContext.Provider value={[taskId, setTaskId]}>
      {props.children}
    </TaskIdContext.Provider>
  )
}
