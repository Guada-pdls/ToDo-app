import React, {useRef} from "react";
import { AiOutlineSearch } from "react-icons/ai";

const TaskSearcher = ({allTasks, setMatch}) => {

    let searchInput = useRef()

    const submitHandler = e => {
        e.preventDefault();
        const search = searchInput.current.value;
        let matches = []
        allTasks.forEach(task => {
            (task.title.toLowerCase().includes(search.toLowerCase()) || task.description.toLowerCase().includes(search.toLowerCase())) && matches.push(task)
        })
        setMatch(matches)
    }

  return (
    <form onSubmit={(e) => submitHandler(e)} className="bg-white mx-8 rounded-full">
      <input ref={searchInput} type="search" placeholder="Search" className="w-full mx-0 my-auto h-10 px-4 py-3 border-slate-400 border rounded-full focus-visible:outline-slate-500"></input>
      <button className="absolute right-10 top-28 text-2xl pr-1">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default TaskSearcher;
