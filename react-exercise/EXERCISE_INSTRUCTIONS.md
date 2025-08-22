# React Task App Exercise (15 Minutes)

## Overview
You have **15 minutes** to complete this React exercise. You need to implement a basic Task application with core functionality.

## What You Need to Implement

### 1. API Service (`src/services/todoApi.js`)
Complete the mock API service methods:
- `getAllTasks()` - Get all tasks from localStorage
- `createTask(text)` - Create a new task
- `updateTask(id, updates)` - Update an existing task
- `deleteTask(id)` - Delete a task

### 2. TaskList Component (`src/components/TodoList.jsx`)
- Add state management using useState and useEffect
- Connect to the API service
- Handle task operations (add, toggle, delete)

### 3. TaskItem Component (`src/components/TodoItem.jsx`)
- Display task text with completion status
- Implement checkbox for toggling completion
- Add delete button functionality

### 4. AddTask Component (`src/components/AddTodo.jsx`)
- Create form with input field and submit button
- Handle form submission
- Clear input after successful addition

## Requirements

### Functional Requirements
- ✅ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Persist tasks using localStorage

### Technical Requirements
- Use React hooks (useState, useEffect)
- Implement proper state management
- Use async/await for API calls
- Write clean, readable code

## Evaluation Criteria
- **Functionality** (60%): Core features work correctly
- **Code Quality** (40%): Clean, readable, well-structured code

## Tips
- Start with the API service implementation
- Focus on core functionality first
- Test each component as you build it
- Don't spend time on styling or extra features

## Testing Your Implementation
1. Add a few tasks
2. Mark some as complete
3. Delete a task
4. Refresh the page to verify persistence

Good luck!
