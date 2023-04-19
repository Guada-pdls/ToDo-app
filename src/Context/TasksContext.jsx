import React, { useState } from 'react'

const TasksContext = React.createContext([])

const TasksContextProvider = ({ children }) => {

  // Functions

  const [match, setMatch] = useState()

  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Comprar leche",
    description: "Comprar leche entera en el supermercado",
    state: false,
  },
  {
    id: 2,
    title: "Llamar al doctor",
    description: "Llamar al doctor para hacer una cita",
    state: false,
  },
  {
    id: 3,
    title: "Pagar la factura del agua",
    description: "Pagar la factura del agua en línea antes del 30 de marzo",
    state: false,
  },
  {
    id: 4,
    title: "Lavar el coche",
    description: "Lavar el coche en el auto-lavado local",
    state: true,
  },
  {
    id: 5,
    title: "Ir al gimnasio",
    description: "Ir al gimnasio para hacer una sesión de cardio",
    state: false,
  },
  {
    id: 6,
    title: "Comprar un regalo de cumpleaños",
    description: "Comprar un regalo de cumpleaños para mi amigo",
    state: true,
  }])

  const editState = (id, state) => {
    const task = tasks.find(task => task.id === id)
    task.state = state;
  }

  const deleteTask = id => setTasks(tasks.filter(task => task.id !== id))

  const editTask = (id, changedTask) => {
    deleteTask(id)
    tasks.push(changedTask)
  }

  const addTask = (title, description, state) => {
    const newTask = {title, description, state}
    console.log(newTask)
  }

  return (
    <TasksContext.Provider value={{ tasks, editState, deleteTask, editTask, addTask, match, setMatch }}>{children}</TasksContext.Provider>
  )
};

export { TasksContext, TasksContextProvider };