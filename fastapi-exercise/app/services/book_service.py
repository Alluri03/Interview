from typing import List, Optional
from app.models.book import Book, BookCreate, BookUpdate
import uuid
from datetime import datetime

class BookService:
    def __init__(self):
        # TODO: Initialize in-memory storage for books
        # Should be a dictionary or list to store book objects
        # You can add some sample data for testing
        pass

    # TODO: Implement get_all_books method
    # Should return a list of all books
    async def get_all_books(self) -> List[Book]:
        pass

    # TODO: Implement get_book_by_id method
    # Should return a book by its ID
    # Should raise an exception if book not found
    async def get_book_by_id(self, book_id: str) -> Book:
        pass

    # TODO: Implement create_book method
    # Should create a new book with:
    # - Auto-generated UUID for id
    # - Current timestamp for created_at and updated_at
    # Should return the created book
    async def create_book(self, book_data: BookCreate) -> Book:
        pass

    # TODO: Implement update_book method
    # Should update an existing book by ID
    # Should update the updated_at timestamp
    # Should raise an exception if book not found
    # Should return the updated book
    async def update_book(self, book_id: str, book_data: BookUpdate) -> Book:
        pass

    # TODO: Implement delete_book method
    # Should delete a book by ID
    # Should raise an exception if book not found
    # Should return True if successful
    async def delete_book(self, book_id: str) -> bool:
        pass
