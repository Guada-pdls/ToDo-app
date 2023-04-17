import React, {useState} from "react";
import TaskList from "./TaskList";
import TaskSearcher from "../TaskSearcher/TaskSearcher";

const tasks = [
  {
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
  },
];

const editState = (id, state) => {
  const task = tasks.find(task => task.id === id)
  task.state = state;
}

const deleteTask = id => tasks.filter(task => task.id !== id)

const editTask = (id, changedTask) => {
  deleteTask(id)
  tasks.push(changedTask)
}


const TaskListContainer = () => {

  const [match, setMatch] = useState()

  return (
    <>
      <TaskSearcher allTasks={tasks} setMatch={setMatch} />
      {typeof match !== "object" ? <TaskList tasks={tasks} /> : match.length === 0 ? <div className="text-center py-10">Not found</div> : <TaskList tasks={match}/>}
    </>
  );
};

export {TaskListContainer, editState, deleteTask, editTask, tasks};
