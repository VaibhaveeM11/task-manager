import React, { useContext } from 'react';
import  TaskListContext  from '../context/TaskListContext';
import  Task  from './Task.js';
export const Tasklist = () =>{
      const {tasks} = useContext(TaskListContext);
    return(<>  
             <ul>
               { tasks.map(task =>  <Task task={task} key={task.id}/>) }
               </ul>
       </>);
}
export default Tasklist;