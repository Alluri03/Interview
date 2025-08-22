# Full-Stack Development Exercise (15 Minutes Each)

This repository contains two exercises designed to test ReactJS and Python FastAPI skills. Each exercise is designed to be completed in **15 minutes**.

## Exercise 1: ReactJS Task App (15 minutes)

**Duration:** 15 minutes  
**Skills Tested:** React hooks, API integration, state management, form handling

### Task Description
Create a basic Task application that allows users to:
- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Persist tasks using localStorage

### What You Need to Implement
1. Complete the `TaskList` component with state management
2. Implement the `TaskItem` component with toggle and delete functionality
3. Add the `AddTask` component with form handling
4. Connect to the mock API service

### Files to Work On
- `src/components/TodoList.jsx`
- `src/components/TodoItem.jsx`
- `src/components/AddTodo.jsx`
- `src/services/todoApi.js`

---

## Exercise 2: Python FastAPI REST API (15 minutes)

**Duration:** 15 minutes  
**Skills Tested:** FastAPI, Pydantic models, CRUD operations, error handling

### Task Description
Create a REST API for managing books with the following endpoints:
- `GET /books` - List all books
- `GET /books/{book_id}` - Get a specific book
- `POST /books` - Create a new book
- `PUT /books/{book_id}` - Update a book
- `DELETE /books/{book_id}` - Delete a book

### What You Need to Implement
1. Complete the Book model with basic validation
2. Implement all CRUD operations in the service layer
3. Create API endpoints with proper error handling
4. Add basic input validation

### Files to Work On
- `app/models/book.py`
- `app/services/book_service.py`
- `app/routes/book_routes.py`
- `app/main.py`

---

## Setup Instructions for CodeSandbox

### For React Exercise:
1. Create a new React sandbox
2. Copy the contents of the `react-exercise` folder
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

### For FastAPI Exercise:
1. Create a new Python sandbox
2. Copy the contents of the `fastapi-exercise` folder
3. Install dependencies: `pip install -r requirements.txt`
4. Run the server: `uvicorn app.main:app --reload`

## Evaluation Criteria

### React Exercise:
- **Functionality** (60%): Core features work correctly
- **Code Quality** (40%): Clean, readable, well-structured code

### FastAPI Exercise:
- **Functionality** (60%): All endpoints work correctly
- **Code Quality** (40%): Clean, readable, well-structured code

## Time Management Tips
- Read the requirements carefully before starting
- Start with the core functionality first
- Don't spend too much time on styling (focus on functionality)
- Test your endpoints/components as you build them
- Focus on working code over perfect code

## What's Simplified for 15 Minutes

### React Exercise:
- Removed TaskFilter component
- Removed loading/error states
- Removed form validation
- Focus on core CRUD operations only

### FastAPI Exercise:
- Removed complex validation (ISBN, custom validators)
- Removed search functionality
- Simplified error handling
- Focus on basic CRUD operations only

Good luck!
