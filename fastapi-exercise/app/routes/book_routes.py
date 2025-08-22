from fastapi import APIRouter, HTTPException, Depends
from typing import List
from app.models.book import Book, BookCreate, BookUpdate
from app.services.book_service import BookService

router = APIRouter()

# TODO: Create a dependency to get the BookService instance
# Should return a new BookService instance

# TODO: Implement GET /books endpoint
# Should return all books
@router.get("/", response_model=List[Book])
async def get_books():
    pass

# TODO: Implement GET /books/{book_id} endpoint
# Should return a specific book by ID
# Should return 404 if book not found
@router.get("/{book_id}", response_model=Book)
async def get_book(book_id: str):
    pass

# TODO: Implement POST /books endpoint
# Should create a new book
# Should return the created book with 201 status
@router.post("/", response_model=Book, status_code=201)
async def create_book(book_data: BookCreate):
    pass

# TODO: Implement PUT /books/{book_id} endpoint
# Should update an existing book
# Should return the updated book
# Should return 404 if book not found
@router.put("/{book_id}", response_model=Book)
async def update_book(book_id: str, book_data: BookUpdate):
    pass

# TODO: Implement DELETE /books/{book_id} endpoint
# Should delete a book by ID
# Should return 204 status on success
# Should return 404 if book not found
@router.delete("/{book_id}", status_code=204)
async def delete_book(book_id: str):
    pass
