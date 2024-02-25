import React from 'react';
import { connect } from 'react-redux';
import { addTask, completeTask, deleteTask } from '../actions/action';

const TodoList = ({ tasks, addTask, completeTask, deleteTask }) => {
  const handleAddTask = (task) => {
    addTask(task);
  };

  const handleCompleteTask = (taskId) => {
    completeTask(taskId);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => handleCompleteTask(task.id)}>Complete</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="New task" onKeyDown={(e) => e.key === 'Enter' && handleAddTask(e.target.value)} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask,
  completeTask,
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
