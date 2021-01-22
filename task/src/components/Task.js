import React ,{ useContext }from 'react';
import { TaskListContext } from '../context/TaskListContext';
const Task = () =>{
    const {removeTask,task } = useContext(TaskListContext)
    return(<>
     <div>
         <li>
             <span>{task.title}</span>
             <button>edit</button>
             <button onClick={() => removeTask(task.id)}>delete</button>
         </li>
     </div>
    </>)
}
export default Task;