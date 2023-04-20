import React, { useState, useEffect } from 'react'

const TasksContext = React.createContext([])

const TasksContextProvider = ({ children }) => {

  // Functions

  const [match, setMatch] = useState()

  const [tasks, setTasks] = useState((localStorage.getItem("tasks") === JSON.parse(null)) ? [] : JSON.parse(localStorage.getItem("tasks")))

  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)), [tasks])

  const editState = (id, state) => {
    const task = tasks.find(task => task.id === id)
    task.state = state;
    editTask(task.id, task)
  }

  const deleteTask = id => setTasks(tasks.filter(task => task.id !== id))

  const editTask = (id, changedTask) => {
    let copyTasks = [...tasks] // si no realizo la copia, no se re-renderiza taskListContainer y, por consecuencia, no aparece la tarea modificada
    const oldTask = tasks.find(task => task.id === id)
    const index = tasks.indexOf(oldTask)
    copyTasks[index] = changedTask
    setTasks(copyTasks)
  }

  const addTask = ({title, description, state}) => {

    // Genero un id autoincrementable

    let id;
    id = tasks.length !== 0 ? tasks.length + 1 : 1

    // Genero la tarea y la pusheo

    const newTask = {id, title, description, state}
    let copyTasks = [...tasks]
    copyTasks.push(newTask)
    setTasks(copyTasks)
  }

  return (
    <TasksContext.Provider value={{ tasks, editState, deleteTask, editTask, addTask, match, setMatch }}>{children}</TasksContext.Provider>
  )
};

export { TasksContext, TasksContextProvider };