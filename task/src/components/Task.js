import React from 'react';
const Task = ({task}) =>
{
    return(<>
     <div>
         <li>
             <span>{task.title}</span>
             <button>edit</button>
             <button>delete</button>
         </li>
     </div>
    </>)
}
export default Task;