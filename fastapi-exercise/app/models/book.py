from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

# TODO: Implement the Book model with basic validation
# The model should have the following fields:
# - id: str (auto-generated UUID)
# - title: str (required, min 1 character, max 200 characters)
# - author: str (required, min 1 character, max 100 characters)
# - description: Optional[str] (max 1000 characters)
# - published_year: Optional[int] (between 1800 and current year)
# - price: Optional[float] (positive number)
# - created_at: datetime (auto-generated)
# - updated_at: datetime (auto-generated)

class BookBase(BaseModel):
    # TODO: Define the base fields for creating/updating a book
    # Should include: title, author, description, published_year, price
    pass

class BookCreate(BookBase):
    # TODO: Implement BookCreate model
    # Should inherit from BookBase
    pass

class BookUpdate(BaseModel):
    # TODO: Implement BookUpdate model
    # Should have all fields as Optional
    pass

class Book(BookBase):
    # TODO: Implement Book model for responses
    # Should include: id, created_at, updated_at
    
    class Config:
        # TODO: Add Pydantic configuration
        # Should allow population by field name
        pass
