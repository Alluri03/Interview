import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import taskApi from '../services/todoApi';

const TaskList = () => {
  // TODO: Add state for tasks array
  // You'll need a state for the tasks array

  // TODO: Implement useEffect to load tasks when component mounts
  // Use the taskApi.getAllTasks() method

  // TODO: Implement function to add a new task
  // Should call taskApi.createTask() and update the tasks state

  // TODO: Implement function to toggle task completion
  // Should call taskApi.updateTask() and update the tasks state

  // TODO: Implement function to delete a task
  // Should call taskApi.deleteTask() and update the tasks state

  return (
    <div>
      {/* TODO: Implement AddTask component */}
      <AddTask onAddTask={/* your add function */} />
      
      {/* TODO: Implement task list rendering */}
      <ul className="task-list">
        {/* Map through tasks and render TaskItem components */}
      </ul>
      
      {/* TODO: Add empty state when no tasks */}
    </div>
  );
};

export default TaskList;
