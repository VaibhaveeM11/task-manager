import React, { useContext } from 'react';
import  TaskListContext  from '../context/TaskListContext';
import  Task  from './Task.js';
export const Tasklist = () =>
{
    const {tasks} =useContext(TaskListContext);
    return(<>
    
    <ul>
        {tasks.map((task)=>{
         return <Task task={task}/>
        })}
    </ul>
    </>)
}
export default Tasklist;