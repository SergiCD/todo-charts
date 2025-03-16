import { useState, useEffect } from "react"; // Importamos useEffect
import { Task } from "./types"; // Importamos la interfaz Task
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  // Función para obtener tareas desde Local Storage
  function getInitialTasks(): Task[] {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  }

  // useState para manejar la lista de tareas con datos iniciales de Local Storage
  const [tasks, setTasks] = useState<Task[]>(getInitialTasks);

  // useEffect para guardar tareas en Local Storage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Función para agregar una nueva tarea
  const addTask = (text: string) => {
    const newTask: Task = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Función para alternar el estado de completado de una tarea
  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función para eliminar una tarea
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Función para editar una tarea
  const editTask = (id: number, text: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, text } : task))
    );
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default App;
