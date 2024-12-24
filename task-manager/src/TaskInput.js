import React from 'react';

const TaskInput = ({ onAddTask }) => {
    const [input, setInput] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim()) {
            onAddTask(input.trim());
            setInput("");
        }
    };

    return (
        <div className="task-input-container">
            <form onSubmit={handleSubmit} className="task-form">
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="task-input"
                />
                <button type="submit" className="add-task-button">
                    Add
                </button>
            </form>
        </div>
    );
};

export default TaskInput;
