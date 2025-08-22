# FastAPI Book Management API Exercise (15 Minutes)

## Overview
You have **15 minutes** to complete this FastAPI exercise. You need to implement a basic REST API for managing books with core CRUD operations.

## What You Need to Implement

### 1. Book Models (`app/models/book.py`)
Complete the Pydantic models:
- `BookBase` - Base fields for books
- `BookCreate` - Model for creating books
- `BookUpdate` - Model for updating books
- `Book` - Complete book model

### 2. Book Service (`app/services/book_service.py`)
Implement the service layer with:
- `get_all_books()` - Get all books
- `get_book_by_id(id)` - Get book by ID
- `create_book(book_data)` - Create new book
- `update_book(id, book_data)` - Update existing book
- `delete_book(id)` - Delete book

### 3. Book Routes (`app/routes/book_routes.py`)
Implement API endpoints:
- `GET /books` - List all books
- `GET /books/{book_id}` - Get specific book
- `POST /books` - Create new book
- `PUT /books/{book_id}` - Update book
- `DELETE /books/{book_id}` - Delete book

### 4. Main Application (`app/main.py`)
- Add CORS middleware
- Include book router

## API Endpoints

| Method | Endpoint | Description | Status Code |
|--------|----------|-------------|-------------|
| GET | `/books` | List all books | 200 |
| GET | `/books/{id}` | Get specific book | 200/404 |
| POST | `/books` | Create new book | 201 |
| PUT | `/books/{id}` | Update book | 200/404 |
| DELETE | `/books/{id}` | Delete book | 204/404 |

## Book Model Fields

- `id`: str (UUID, auto-generated)
- `title`: str (required, 1-200 chars)
- `author`: str (required, 1-100 chars)
- `description`: Optional[str] (max 1000 chars)
- `published_year`: Optional[int] (1800-current year)
- `price`: Optional[float] (positive number)
- `created_at`: datetime (auto-generated)
- `updated_at`: datetime (auto-generated)

## Requirements

### Functional Requirements
- ✅ Complete CRUD operations
- ✅ Basic input validation
- ✅ Proper HTTP status codes
- ✅ In-memory data storage

### Technical Requirements
- Use FastAPI framework
- Implement Pydantic models
- Use proper HTTP status codes
- Write clean, readable code

## Evaluation Criteria
- **Functionality** (60%): All endpoints work correctly
- **Code Quality** (40%): Clean, readable, well-structured code

## Tips
- Start with the models
- Focus on core CRUD operations
- Test each endpoint as you build it
- Don't spend time on complex validation

## Testing Your Implementation
1. Start the server: `uvicorn app.main:app --reload`
2. Visit `http://localhost:8000/docs` for interactive docs
3. Test each endpoint:
   - Create a book
   - Get all books
   - Get specific book
   - Update a book
   - Delete a book

## Sample Book Data
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "description": "A story of the fabulously wealthy Jay Gatsby",
  "published_year": 1925,
  "price": 12.99
}
```

Good luck!
