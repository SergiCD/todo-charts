import { useState } from "react"; // Importamos el hook useState de React
import { Task } from "./types"; // Importamos la interfaz Task desde types.ts
import TaskForm from "./components/TaskForm"; // Importamos el componente TaskForm
import TaskList from "./components/TaskList"; // Importamos el componente TaskList

// Definimos el componente App como una función de flecha (también podríamos usar function App() {})
const App = () => {
  // useState para manejar la lista de tareas
  // TypeScript: <Task[]> indica que el estado es un array de objetos tipo Task
  const [tasks, setTasks] = useState<Task[]>([]);

  // Función para agregar una nueva tarea
  // TypeScript: text es un string y la función no devuelve nada (void)
  const addTask = (text: string) => {
    // Creamos una nueva tarea con un id único, el texto recibido y el estado inicial "completed: false"
    const newTask: Task = { id: Date.now(), text, completed: false };

    // Actualizamos el estado añadiendo la nueva tarea a la lista
    setTasks([...tasks, newTask]);
  };
  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* Pasamos la función addTask como prop a TaskForm */}
      <TaskForm addTask={addTask} />
      {/* Pasamos el estado tasks como prop a TaskList */}
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App; // Exportamos el componente para usarlo en otras partes de la aplicación
