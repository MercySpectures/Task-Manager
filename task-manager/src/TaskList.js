import React from 'react';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
    return (
        <div className="task-list-container">
            {tasks.length === 0 ? (
                <p className="no-tasks-message">No tasks available. Add a task to get started!</p>
            ) : (
                <ul className="task-list">
                    {tasks.map((task, index) => (
                        <li key={index} className="task-item">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => onToggleComplete(index)}
                                className="task-checkbox"
                            />
                            <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                                {task.text}
                            </span>
                            <button
                                onClick={() => onDeleteTask(index)}
                                className="delete-button"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;
