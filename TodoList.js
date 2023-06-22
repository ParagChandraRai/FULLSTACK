import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') {
      alert('PLEASE ENTER SOME TASK');
      return;
    }

    setTasks([...tasks, task]);
    setTask('');
  };

  const handleShowNextTask = () => {
    if (tasks.length === 0) {
      alert('No tasks remaining');
      return;
    }

    const nextTask = tasks.pop();
    setTask(nextTask);
    setTasks([...tasks]);
  };

  return (
    <div className="container">
      <h1 style={{ color: 'blue' }}>To Do List</h1>
      <label htmlFor="task">Add Task:</label>
      <input
        type="text"
        id="task"
        name="task"
        placeholder="Add task here"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button onClick={handleAddTask}>Add Task</button>
      <br /><br />
      <textarea name="text" id="txtarea" rows="9" cols="40" value={tasks.join('\n')} readOnly></textarea>
      <br /><br /><br />
      <label htmlFor="showtask">Next Task:</label>
      <input type="text" id="showtask" name="showtask" value={task} readOnly />
      <button onClick={handleShowNextTask}>Show Next Task</button>
      <br /><br />
    </div>
  );
}

export default TodoList;
