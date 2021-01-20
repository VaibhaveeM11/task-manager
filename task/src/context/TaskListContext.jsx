import React, {useState,createContext} from 'react';
 export const TaskListContext = createContext();
const TaskListContextProvider = () => {
      const [tasks, setTasks]= useState([
            { task:'Workout',id:1 },
            { task:'code',id:2 },
            { task:'coffe',id:2 }
          ]);
    return <div>Task li</div>
}
export default TaskListContextProvider;