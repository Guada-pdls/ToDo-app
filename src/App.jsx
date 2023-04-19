import Header from "./Components/TaskListContainer/Header/Header"
import TaskListContainer from "./Components/TaskListContainer/TaskListContainer"
import { TasksContextProvider } from "./Context/TasksContext"
import TaskSearcher from './Components/TaskSearcher/TaskSearcher';

function App() {

  return (
    <>
      <Header/>
      <TasksContextProvider>
        <main className="bg-sky-300 pt-7 min-h-screen">
          <TaskSearcher/>
          <TaskListContainer/>
        </main>
      </TasksContextProvider>
    </>
  )
}

export default App
