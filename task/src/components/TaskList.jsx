import React, { useContext } from 'react';
import  {TaskListContext} from '../context/TaskListContext';

import  {Task} from './Task';
const Tasklist = () =>
{
    const {tasks} =useContext(TaskListContext);
    return(<>
    
    <ul>
        {tasks.map((task)=>{
         return <Task/>
        })}
    </ul>
    </>)
}
export default Task;