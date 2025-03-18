import { Task } from "../types";

interface Props {
    tasks: Task[];
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    editTask: (id: number, text: string) => void;
}

const TaskList = ({ tasks, toggleTask, deleteTask, editTask }: Props) => {
    return (
        <ul className="w-full max-w-md space-y-4">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg"
                >
                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                            className="form-checkbox h-5 w-5 text-blue-500"
                        />
                        <span
                            className={`text-lg ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}
                        >
                            {task.text}
                        </span>
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => editTask(task.id, prompt("Edit task:", task.text) || task.text)}
                            className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
