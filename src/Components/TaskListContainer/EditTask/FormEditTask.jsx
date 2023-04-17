import React from "react";

const FormEditTask = ({ task }) => {
  const { title, description, state } = task ? task : "";

  return (
    <form>
      <div className="px-5 flex flex-col">
        <label htmlFor="title">Title</label>
        <input className="mb-3 rounded" type="text" name="title" value={title} />
        <label htmlFor="description">Description</label>
        <textarea
          className="mb-3 rounded"
          type="text"
          name="description"
          value={description}
        />
        <fieldset>
          <input
            type="checkbox"
            name="complete"
            className="mr-1 mb-5"
            checked={state}
          />
          <label htmlFor="complete">Complete</label>
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

export default FormEditTask;
