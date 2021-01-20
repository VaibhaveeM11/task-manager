import './App.css';
import  TaskListContextProvider  from './context/TaskListContext';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
const App = () => {
  return (
    <div className="App">
     {/* <TaskListContextProvider> */}
       <TaskForm/>
       <div>
         <TaskList/>
       </div>
     {/* </TaskListContextProvider> */}
    </div>
  );
}

export default App;
