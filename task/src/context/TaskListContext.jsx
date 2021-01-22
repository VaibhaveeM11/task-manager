import React, { useState,createContext } from 'react';
import uuid from 'uuid';
export const TaskListContext = createContext();
 const TaskListContextProvider = (props) => {
      const [tasks, setTasks] = useState([
                         { title:'Workout',id:1 },
                         { title:'code',id:2 },
                         { title:'coffe',id:3 }
                   ]),
          addTask = title => setTasks([...tasks,{title,id:uuid()}]),
          removeTask = id =>  setTasks(tasks.filter(task => task.id!==id)),
          clearTask = () => setTasks([]);
    return (
       <TaskListContext.Provider value={{tasks,addTask, removeTask, clearTask}}>
             {console.log('hello')}
          {props.childern}
       </TaskListContext.Provider>)
}
export default TaskListContextProvider;