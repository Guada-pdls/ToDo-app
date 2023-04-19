import React, {useState, useContext} from "react";
import { TasksContext } from "../../Context/TasksContext";
import TaskList from "./TaskList";

const TaskListContainer = () => {

  const {tasks, match} = useContext(TasksContext)

  return (
    <>
      {typeof match !== "object" ? <TaskList tasks={tasks} /> : match.length === 0 ? <div className="text-center py-10">Not found</div> : <TaskList tasks={match}/>}
    </>
  );
};

export default TaskListContainer;
