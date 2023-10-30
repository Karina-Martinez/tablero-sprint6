import React, { useState } from "react";
import Task from "./Task"; // Import your Task component

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Description 1" },
    { id: 2, title: "Task 2", description: "Description 2" },
    // Add more tasks as needed
  ]);

  const handleEditTask = (editedTask) => {
    // Update the task in the state
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskToDelete) => {
    // Delete the task from the state
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default App;