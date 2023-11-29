import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-3xl font-bold text-center mb-3">
        Aún no hay tareas
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
