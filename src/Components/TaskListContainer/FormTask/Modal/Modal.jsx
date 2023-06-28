import { AiOutlineClose } from "react-icons/ai";
import FormTask from "../FormTask";

const Modal = ({ task, close }) => {
  return (
    <section className="fixed bottom-0 left-0 top-0 right-0 flex flex-col items-center justify-center backdrop-blur-sm bg-modal">
      <div className="bg-sky-200 w-96 rounded-xl">
          <div className="flex justify-between px-5 pt-4 pb-2 mb-2 text-lg border-b border-slate-400">
            <h4>Edit task</h4>
            <button onClick={() => close()}>
              <AiOutlineClose />
            </button>
          </div>
          <FormTask task={task} close={close}/>
      </div>
    </section>
  );
};

export default Modal;
