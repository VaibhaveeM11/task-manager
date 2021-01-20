import React ,{useContext}from 'react';
import {TaskListContext} from '../context/TaskListContext'
const TaskForm = ({task}) =>
{
    const {addTask} =useContext(TaskListContext)
    return(<>
     <div>
        <form onSubmit={handleSubmit}> 
            <input onChange={handleInput}/>
            <div>
                <button >Add task</button>
                <button>Clear</button>
            </div>
        </form>
     </div>
    </>)
}
export default TaskForm;