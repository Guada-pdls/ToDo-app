import { useState, useEffect, useContext } from "react";
import { TasksContext } from "../../Context/TasksContext";
import { AiFillDelete, AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import Modal from "./FormTask/Modal/Modal";

const TaskCard = ({task}) => {

  const {editState, deleteTask} = useContext(TasksContext)

  const [modal, setModal] = useState(false)
  const [taskState, setTaskState] = useState(task !== undefined ? task.state : false)

  useEffect(() => {
    task.id !== undefined && editState(task?.id, taskState)
  }, [taskState])

  return (
    <article className='bg-sky-200 rounded-xl m-2 w-full h-48 '>
    {task.id ? (
      <>
        <h4 className='font-semibold text-lg pt-3 pl-4 mb-2'>{task.title}</h4>
        <p className='pl-4 h-16'>- {task.description}</p>
        <footer className='flex items-center justify-between mt-4 py-4 border-t border-slate-400'>
          <button type="button" onClick={() => setTaskState(!taskState)} className={taskState ? "btn bg-green-400" : "btn bg-red-500"}>{taskState ? "Complete" : "Incomplete"}</button>
          <div className='flex items-center pr-4'>
            <button className='text-xl pr-2' onClick={() => setModal(true)}><AiFillEdit/></button>
            <button className='text-xl' onClick={() => deleteTask(task.id)}><AiFillDelete/></button>
          </div>
        {modal && <Modal task={task} close={() => setModal(false)}/>}
        </footer>
      </>
    ) : (<button onClick={() => setModal(true)} className='bg-sky-700 rounded-md border-dashed border-2 border-sky-200 w-full h-full text-white flex flex-col items-center justify-center'>Add new task<AiOutlinePlus/></button>)}
        {modal && <Modal task={task} close={() => setModal(false)}/>}

    </article>
    
  )
}

export default TaskCard