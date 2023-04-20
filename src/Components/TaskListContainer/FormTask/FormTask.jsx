import React, { useState, useContext } from "react";
import { TasksContext } from "../../../Context/TasksContext";

const FormTask = ({ task, close }) => {

  const {addTask, editTask} = useContext(TasksContext)
  const [form, setForm] = useState({...task})

  const inputHandler = e => {
    let {name, value} = e.target
    name === "state" && (value = e.target.checked)
    setForm({...form, [name]: value})
  }

  const submitHandler = e => {
    e.preventDefault()
    task.id === undefined ? addTask(form) : editTask(task.id, form)
    close()
  }

  return (
    <form onSubmit={e => submitHandler(e)}>
      <div className="px-5 flex flex-col">
        <label htmlFor="title">Title</label>
        <input 
          className="mb-3 rounded" 
          type="text" 
          name="title" 
          value={form.title}
          onInput={e => inputHandler(e)} />
        <label htmlFor="description">Description</label>
        <textarea
          className="mb-3 rounded"
          type="text"
          name="description"
          value={form.description}
          onChange={e => inputHandler(e)}
        />
        <fieldset>
          <input
            type="checkbox"
            name="state"
            className="mr-1 mb-5"
            checked={form.state}
            onChange={e => inputHandler(e)}
          />
          <label htmlFor="state">Complete</label>
        </fieldset>
      </div>
      <button
        type="submit"
        className="rounded-b-lg w-full text-white py-2 bg-sky-800"
      >
        Save changes
      </button>
    </form>
  );
};

export default FormTask;
