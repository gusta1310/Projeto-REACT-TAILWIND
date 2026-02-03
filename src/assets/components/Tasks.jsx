import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetails(task) {
    const query = new URLSearchParams({
      title: task.title,
      description: task.description,
    }).toString();
    navigate(`/task?${query}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-100 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2 items-center">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-white p-2 rounded-md text-left ${
              task.isCompleted ? "line-through opacity-60" : ""
            }`}
          >
            {task.title}
          </button>

          <button
            onClick={() => onSeeDetails(task)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            <ChevronRightIcon size={20} />
          </button>

          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-red-500 text-white p-2 rounded-md ml-2"
            aria-label={`Deletar ${task.title}`}
          >
            <TrashIcon size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
