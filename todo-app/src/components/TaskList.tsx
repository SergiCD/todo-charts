import { Task } from "../types"; // Importamos el tipo Task desde types.ts

// Definimos una interfaz Props para tipar las propiedades que recibe el componente
interface Props {
    tasks: Task[]; // tasks es un array de objetos de tipo Task
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    editTask: (id: number, text: string) => void;
}


// Definimos el componente TaskList, desestructurando la prop tasks y tipándola con Props
const TaskList = ({ tasks, toggleTask, deleteTask, editTask }: Props) => {
    return (
        <ul>
            {/* Iteramos sobre el array tasks y renderizamos cada tarea en un <li> */}
            {tasks.map(task => (
                <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                    <input type="checkbox" key={task.id} onChange={() => toggleTask(task.id)} />
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                    {task.text} {/* Mostramos el texto de la tarea */}
                </li>
            ))}
        </ul>
    );
};

export default TaskList; // Exportamos el componente para usarlo en otras partes de la app
