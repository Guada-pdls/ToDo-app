import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  return (
    <div className="flex flex-wrap p-6 justify-center ">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
      <TaskCard task={{title: '', description: '', state: false }}/>
    </div>
  );
};

export default TaskList;
