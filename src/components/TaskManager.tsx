import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './Button';
import Card from './Card';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    // Use a functional update to be safe
    setTasks(prevTasks => [...prevTasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const deleteTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">My Tasks</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow p-2 border rounded-l"
        />
        <Button onClick={addTask} variant="primary">Add</Button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between p-2 border-b">
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
            >
              {task.text}
            </span>
            <Button onClick={() => deleteTask(task.id)} variant="danger">
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default TaskManager;