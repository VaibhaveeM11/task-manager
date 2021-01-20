import React, {useState,createContext} from 'react';
import uuid from 'uuid'
 export const TaskListContext = createContext();
export const TaskListContextProvider = (props) => {
      const [tasks, setTasks]= useState([
            { title:'Workout',id:1 },
            { title:'code',id:2 },
            { title:'coffe',id:3 }
          ]),
          addTask =(title)=>setTasks([...tasks,{title,id:uuid()}])
    return (
    <TaskListContext.Provider value={tasks,addTask}>
          {props.childern}
    </TaskListContext.Provider>)
}
export default TaskListContextProvider;