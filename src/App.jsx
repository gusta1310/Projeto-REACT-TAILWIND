import { useEffect, useState } from "react";
import AddTask from "./assets/components/AddTask";
import Tasks from "./assets/components/Tasks";

function App() {
  const defaultTasks = [
    // tarefas padrão
    {
      id: 1,
      title: "Ir pra academia",
      description: "academia pra poder ficar com o corpo saudavel",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Ir pro trabalho",
      description: "Ir trabalhar pra poder ganhar dinheiro",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar programação",
      description: "Estudar programação pra virar um desenvolvedor full-stack",
      isCompleted: false,
    },
  ];

  const [tasks, setTasks] = useState(
    // estado para armazenar as tarefas, inicializado com as tarefas do localStorage ou as padrão
    JSON.parse(localStorage.getItem("tasks")) || defaultTasks,
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function OnTaskClick(taskId) {
    // função para lidar com o clique na tarefa e mudar o estado de conclusão
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    // função para deletar uma tarefa
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTask(title, description) {
    // função para adicionar uma nova tarefa
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center p-5">
          Gerenciador de tarefas
        </h1>
        <AddTask onAddTask={onAddTask} />
        <div className="mt-4">
          <Tasks // componente de lista de tarefas
            tasks={tasks}
            onTaskClick={OnTaskClick}
            onDeleteTaskClick={onDeleteTaskClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
