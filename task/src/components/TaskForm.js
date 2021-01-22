import React ,{ useContext, useState }from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
    const { addTask, clearTask } = useContext(TaskListContext),
        [title, setTitle] = useState(''),
        handleInput = (e) => { setTitle(e.target.value) },
       handleSubmit = (e) => { 
             e.preventDefault();
             addTask(title);
            setTitle(''); }
return(<>
         <div>
           <form placeholder ='add task ..'onSubmit={handleSubmit}> 
                <input type='text' onChange={handleInput}/>
               <div>
                <button  type='submit' >Add task</button>
                <button onClick={clearTask}>Clear</button>
            </div>
        </form>
     </div>
    </>)
}
export default TaskForm;