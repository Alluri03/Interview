import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  // TODO: Add state for the input field
  // You'll need a state for the task text

  // TODO: Implement function to handle form submission
  // Should:
  // - Prevent default form submission
  // - Call onAddTask with the task text
  // - Clear the input field after successful addition

  // TODO: Implement function to handle input changes
  // Should update the input state

  return (
    <form className="task-form" onSubmit={/* your submit handler */}>
      {/* TODO: Implement input field */}
      {/* Should have:
          - value bound to your input state
          - onChange handler
          - placeholder text
      */}
      
      {/* TODO: Implement submit button */}
      {/* Should have:
          - type="submit"
          - appropriate text like "Add Task"
      */}
    </form>
  );
};

export default AddTask;
