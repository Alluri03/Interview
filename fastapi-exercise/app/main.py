from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.routes.book_routes import router as book_router
from app.models.book import Book
from app.services.book_service import BookService

app = FastAPI(
    title="Book Management API Exercise",
    description="Complete the implementation to make this API functional",
    version="1.0.0"
)

# TODO: Add CORS middleware configuration
# Should allow requests from any origin for development

# TODO: Include the book router
# Should mount the book routes under /books prefix

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
