// Definimos un tipo llamado Task que representa la estructura de una tarea
export type Task = {
    id: number,       // Identificador único de la tarea (un número)
    text: string,     // Texto o descripción de la tarea
    completed: boolean; // Indica si la tarea está completada (true/false)
};