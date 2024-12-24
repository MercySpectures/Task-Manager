import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
      const newTask = { text: taskText, completed: false };
      setTasks([...tasks, newTask]);
  };

  const toggleComplete = (index) => {
      const updatedTasks = tasks.map((task, i) =>
          i === index ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
  };

  return (
      <div className="task-manager">
          <h1 className="task-manager-title">Task Manager</h1>
          <TaskInput onAddTask={addTask} />
          <TaskList
              tasks={tasks}
              onToggleComplete={toggleComplete}
              onDeleteTask={deleteTask}
          />
      </div>
  );
};

export default App;
