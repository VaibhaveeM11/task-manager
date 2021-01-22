import  TaskListContextProvider  from './context/TaskListContext';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskHeader from './components/TaskHeader';
const App = () => {
  return (
    <TaskListContextProvider>
      <div className="App">
       <TaskHeader/>
       <TaskForm/>
       <div>
         <TaskList/>
       </div>
    </div>
  </TaskListContextProvider>
  );
}

export default App;
