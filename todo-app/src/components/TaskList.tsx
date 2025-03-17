import { useState } from "react";
import { Task } from "../types";

interface Props {
    tasks: Task[];
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    editTask: (id: number, text: string) => void;
}

const TaskList = ({ tasks, toggleTask, deleteTask, editTask }: Props) => {
    // Estado para controlar qué tarea está siendo editada
    const [editID, setEditID] = useState<number | null>(null);
    const [newText, setNewText] = useState<string>("");

    // Función para guardar la edición
    const saveEdit = () => {
        if (editID !== null && newText.trim() !== "") {
            editTask(editID, newText);  // Guardamos el nuevo texto
            setEditID(null);  // Salimos del modo edición
            setNewText("");  // Limpiamos el input
        }
    };

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                    <input type="checkbox" onChange={() => toggleTask(task.id)} checked={task.completed} />

                    {editID === task.id ? (
                        // Si la tarea está en edición, mostramos un input
                        <input
                            type="text"
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                            onBlur={saveEdit} // Guardar cuando el usuario haga clic fuera
                            onKeyDown={(e) => e.key === "Enter" && saveEdit()} // Guardar con Enter
                            autoFocus // Enfocar automáticamente el input
                        />
                    ) : (
                        // Si NO está en edición, mostramos el texto normal
                        <span>{task.text}</span>
                    )}

                    <button onClick={() => deleteTask(task.id)}>Delete</button>

                    {editID === task.id ? (
                        <button onClick={saveEdit}>Save</button> // Botón para guardar cambios
                    ) : (
                        <button onClick={() => { setEditID(task.id); setNewText(task.text); }}>Edit</button>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
