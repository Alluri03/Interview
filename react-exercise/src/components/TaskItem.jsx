import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  // TODO: Implement the TaskItem component
  // It should display:
  // - A checkbox to toggle completion status
  // - The task text (with strikethrough if completed)
  // - A delete button
  
  // The component should call:
  // - onToggle(task.id) when checkbox is clicked
  // - onDelete(task.id) when delete button is clicked

  return (
    <li className="task-item">
      {/* TODO: Implement checkbox */}
      
      {/* TODO: Implement task text with conditional styling */}
      
      {/* TODO: Implement delete button */}
    </li>
  );
};

export default TaskItem;
