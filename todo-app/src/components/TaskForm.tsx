import { useState } from "react"; // Importamos el hook useState de React

// Definimos una interfaz Props para tipar las propiedades del componente
// addTask es una función que recibe un string y no devuelve nada (void)
interface Props {
    addTask: (text: string) => void;
}

// Componente funcional TaskForm que recibe addTask como prop
const TaskForm = ({ addTask }: Props) => {
    // useState para manejar el estado del input (texto de la nueva tarea)
    const [text, setText] = useState("");

    // Función que se ejecuta cuando el usuario envía el formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Evita que la página se recargue al enviar el formulario

        if (!text.trim()) return; // Si el input está vacío o solo tiene espacios, no hace nada

        addTask(text); // Llama a la función addTask y le pasa el texto como nueva tarea

        setText(""); // Limpia el input después de agregar la tarea
    };

    return (
        <form onSubmit={handleSubmit}> {/* Formulario con evento onSubmit */}
            <input
                type="text"
                value={text} // El valor del input está vinculado al estado text
                onChange={(e) => setText(e.target.value)} // Actualiza el estado al escribir
                placeholder="Nueva tarea" // Muestra un mensaje en el input cuando está vacío
            />
            <button type="submit">Agregar</button> {/* Botón para enviar el formulario */}
        </form>
    );
};

export default TaskForm; // Exportamos el componente para usarlo en otras partes de la app
