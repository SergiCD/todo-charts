import { useState } from "react";

interface Props {
    addTask: (text: string) => void;
}

const TaskForm = ({ addTask }: Props) => {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!text.trim()) return;

        addTask(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mb-6 flex space-x-4">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nueva tarea"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                Agregar
            </button>
        </form>
    );
};

export default TaskForm;
