# Sample Solutions for 15-Minute Exercises

This file contains sample solutions for both simplified exercises to help you evaluate candidate submissions.

## React Exercise - Sample Solution (15 min)

### 1. API Service (`src/services/todoApi.js`)
```javascript
class TaskApiService {
  constructor() {
    this.storageKey = 'tasks';
    this.nextId = 1;
    this.loadTasks();
  }

  loadTasks() {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      const tasks = JSON.parse(stored);
      this.nextId = Math.max(...tasks.map(t => t.id), 0) + 1;
    }
  }

  saveTasks(tasks) {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  async getAllTasks() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  async createTask(text) {
    const tasks = await this.getAllTasks();
    const newTask = {
      id: this.nextId++,
      text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    tasks.push(newTask);
    this.saveTasks(tasks);
    return newTask;
  }

  async updateTask(id, updates) {
    const tasks = await this.getAllTasks();
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) throw new Error('Task not found');
    
    tasks[index] = { ...tasks[index], ...updates };
    this.saveTasks(tasks);
    return tasks[index];
  }

  async deleteTask(id) {
    const tasks = await this.getAllTasks();
    const filteredTasks = tasks.filter(task => task.id !== id);
    this.saveTasks(filteredTasks);
    return true;
  }
}
```

### 2. TaskList Component (`src/components/TodoList.jsx`)
```javascript
import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import taskApi from '../services/todoApi';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await taskApi.getAllTasks();
    setTasks(data);
  };

  const addTask = async (text) => {
    const newTask = await taskApi.createTask(text);
    setTasks(prev => [...prev, newTask]);
  };

  const toggleTask = async (id) => {
    const task = tasks.find(t => t.id === id);
    const updatedTask = await taskApi.updateTask(id, { completed: !task.completed });
    setTasks(prev => prev.map(t => t.id === id ? updatedTask : t));
  };

  const deleteTask = async (id) => {
    await taskApi.deleteTask(id);
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div>
      <AddTask onAddTask={addTask} />
      
      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
      
      {tasks.length === 0 && (
        <div style={{ textAlign: 'center', color: '#666', marginTop: '20px' }}>
          No tasks yet. Add one above!
        </div>
      )}
    </div>
  );
};
```

### 3. TaskItem Component (`src/components/TodoItem.jsx`)
```javascript
import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        className="task-checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      
      <span className={`task-text ${task.completed ? 'completed' : ''}`}>
        {task.text}
      </span>
      
      <button
        className="task-delete"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
};
```

### 4. AddTask Component (`src/components/AddTodo.jsx`)
```javascript
import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text);
      setText('');
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        value={text}
        onChange={handleChange}
        placeholder="Add a new task..."
      />
      
      <button type="submit" className="task-button">
        Add Task
      </button>
    </form>
  );
};
```

## FastAPI Exercise - Sample Solution (15 min)

### 1. Book Models (`app/models/book.py`)
```python
from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class BookBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    author: str = Field(..., min_length=1, max_length=100)
    description: Optional[str] = Field(None, max_length=1000)
    published_year: Optional[int] = Field(None, ge=1800, le=2024)
    price: Optional[float] = Field(None, gt=0)

class BookCreate(BookBase):
    pass

class BookUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=1, max_length=200)
    author: Optional[str] = Field(None, min_length=1, max_length=100)
    description: Optional[str] = Field(None, max_length=1000)
    published_year: Optional[int] = Field(None, ge=1800, le=2024)
    price: Optional[float] = Field(None, gt=0)

class Book(BookBase):
    id: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
```

### 2. Book Service (`app/services/book_service.py`)
```python
from typing import List
from app.models.book import Book, BookCreate, BookUpdate
import uuid
from datetime import datetime

class BookService:
    def __init__(self):
        self.books = {}
        # Add sample data
        sample_book = Book(
            id=str(uuid.uuid4()),
            title="Sample Book",
            author="Sample Author",
            description="A sample book for testing",
            published_year=2023,
            price=19.99,
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        self.books[sample_book.id] = sample_book

    async def get_all_books(self) -> List[Book]:
        return list(self.books.values())

    async def get_book_by_id(self, book_id: str) -> Book:
        if book_id not in self.books:
            raise ValueError("Book not found")
        return self.books[book_id]

    async def create_book(self, book_data: BookCreate) -> Book:
        book_id = str(uuid.uuid4())
        now = datetime.now()
        
        book = Book(
            id=book_id,
            **book_data.dict(),
            created_at=now,
            updated_at=now
        )
        
        self.books[book_id] = book
        return book

    async def update_book(self, book_id: str, book_data: BookUpdate) -> Book:
        if book_id not in self.books:
            raise ValueError("Book not found")
        
        existing_book = self.books[book_id]
        update_data = book_data.dict(exclude_unset=True)
        
        for field, value in update_data.items():
            setattr(existing_book, field, value)
        
        existing_book.updated_at = datetime.now()
        return existing_book

    async def delete_book(self, book_id: str) -> bool:
        if book_id not in self.books:
            raise ValueError("Book not found")
        
        del self.books[book_id]
        return True
```

### 3. Book Routes (`app/routes/book_routes.py`)
```python
from fastapi import APIRouter, HTTPException, Depends
from typing import List
from app.models.book import Book, BookCreate, BookUpdate
from app.services.book_service import BookService

router = APIRouter()

def get_book_service():
    return BookService()

@router.get("/", response_model=List[Book])
async def get_books(book_service: BookService = Depends(get_book_service)):
    return await book_service.get_all_books()

@router.get("/{book_id}", response_model=Book)
async def get_book(book_id: str, book_service: BookService = Depends(get_book_service)):
    try:
        return await book_service.get_book_by_id(book_id)
    except ValueError:
        raise HTTPException(status_code=404, detail="Book not found")

@router.post("/", response_model=Book, status_code=201)
async def create_book(book_data: BookCreate, book_service: BookService = Depends(get_book_service)):
    return await book_service.create_book(book_data)

@router.put("/{book_id}", response_model=Book)
async def update_book(book_id: str, book_data: BookUpdate, book_service: BookService = Depends(get_book_service)):
    try:
        return await book_service.update_book(book_id, book_data)
    except ValueError:
        raise HTTPException(status_code=404, detail="Book not found")

@router.delete("/{book_id}", status_code=204)
async def delete_book(book_id: str, book_service: BookService = Depends(get_book_service)):
    try:
        await book_service.delete_book(book_id)
    except ValueError:
        raise HTTPException(status_code=404, detail="Book not found")
```

### 4. Main Application (`app/main.py`)
```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.book_routes import router as book_router

app = FastAPI(
    title="Book Management API Exercise",
    description="Complete the implementation to make this API functional",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the book router
app.include_router(book_router, prefix="/books", tags=["books"])

@app.get("/")
async def root():
    return {
        "message": "Book Management API Exercise",
        "instructions": "Complete the implementation in the following files:",
        "files": [
            "app/models/book.py",
            "app/services/book_service.py", 
            "app/routes/book_routes.py"
        ],
        "endpoints": [
            "GET /books - List all books",
            "GET /books/{book_id} - Get a specific book",
            "POST /books - Create a new book",
            "PUT /books/{book_id} - Update a book",
            "DELETE /books/{book_id} - Delete a book"
        ]
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

## Evaluation Checklist (15-minute version)

### React Exercise
- [ ] API service methods implemented correctly
- [ ] State management with useState and useEffect
- [ ] Task operations (add, toggle, delete) work
- [ ] Components properly structured
- [ ] Form handling works
- [ ] Clean, readable code

### FastAPI Exercise
- [ ] Pydantic models with basic validation
- [ ] Service layer with CRUD operations
- [ ] API endpoints with correct HTTP methods
- [ ] Basic error handling with proper status codes
- [ ] CORS middleware configured
- [ ] Router properly included
- [ ] Clean, readable code

## Scoring Guide (15-minute version)

### Excellent (90-100%)
- All core requirements implemented correctly
- Clean, well-structured code
- Basic error handling present
- Code works as expected

### Good (70-89%)
- Most core requirements implemented
- Code is mostly clean and readable
- Minor issues or missing features
- Basic functionality working

### Fair (50-69%)
- Some core functionality working
- Some code quality issues
- Missing important features
- Incomplete implementation

### Poor (0-49%)
- Major functionality missing
- Poor code quality
- No error handling
- Incomplete or non-working code

## Key Differences from Full Version

### React Exercise Simplified
- Removed TaskFilter component
- Removed loading/error states
- Removed form validation
- Focus on core CRUD operations only

### FastAPI Exercise Simplified
- Removed complex validation (ISBN, custom validators)
- Removed search functionality
- Simplified error handling
- Focus on basic CRUD operations only

These simplified versions are designed to be achievable in 15 minutes while still testing the core skills needed for each technology.
