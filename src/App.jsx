import Header from "./Components/TaskListContainer/Header/Header"
import {TaskListContainer} from "./Components/TaskListContainer/TaskListContainer"

function App() {

  return (
    <>
      <Header/>
      <main className="bg-sky-300 pt-7 min-h-screen">
        <TaskListContainer/>
      </main>
    </>
  )
}

export default App
