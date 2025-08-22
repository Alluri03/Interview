import React from 'react';
import TaskList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="task-app">
        <div className="task-header">
          <h1>Task App Exercise</h1>
          <p>Complete the implementation to make this task app functional</p>
        </div>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
