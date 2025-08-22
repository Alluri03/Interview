# CodeSandbox Setup Guide

This guide explains how to set up both exercises in CodeSandbox for candidate testing.

## React Exercise Setup

### 1. Create React Sandbox
1. Go to [codesandbox.io](https://codesandbox.io)
2. Click "Create Sandbox"
3. Select "React" template
4. Choose "React" (not React TypeScript)

### 2. Upload Files
1. Delete the default files in the sandbox
2. Upload all files from the `react-exercise` folder:
   - `package.json`
   - `public/index.html`
   - `src/index.js`
   - `src/index.css`
   - `src/App.js`
   - `src/App.css`
   - `src/services/todoApi.js`
   - `src/components/TodoList.jsx`
   - `src/components/TodoItem.jsx`
   - `src/components/AddTodo.jsx`
   - `src/components/TodoFilter.jsx`
   - `EXERCISE_INSTRUCTIONS.md`

### 3. Install Dependencies
1. The sandbox should automatically install dependencies from `package.json`
2. If not, run: `npm install`

### 4. Start Development Server
1. The sandbox should automatically start the development server
2. If not, run: `npm start`

### 5. Share with Candidate
1. Click "Share" button
2. Copy the URL
3. Send to candidate with instructions to read `EXERCISE_INSTRUCTIONS.md`

## FastAPI Exercise Setup

### 1. Create Python Sandbox
1. Go to [codesandbox.io](https://codesandbox.io)
2. Click "Create Sandbox"
3. Select "Python" template
4. Choose "Python" or "FastAPI" if available

### 2. Upload Files
1. Delete the default files in the sandbox
2. Upload all files from the `fastapi-exercise` folder:
   - `requirements.txt`
   - `app/__init__.py`
   - `app/main.py`
   - `app/models/__init__.py`
   - `app/models/book.py`
   - `app/services/__init__.py`
   - `app/services/book_service.py`
   - `app/routes/__init__.py`
   - `app/routes/book_routes.py`
   - `EXERCISE_INSTRUCTIONS.md`

### 3. Install Dependencies
1. Open the terminal in CodeSandbox
2. Run: `pip install -r requirements.txt`

### 4. Start the Server
1. In the terminal, run: `uvicorn app.main:app --reload --host 0.0.0.0 --port 8000`
2. The server should start and show a URL

### 5. Access the API
1. Click on the URL shown in the terminal
2. You should see the API documentation at `/docs`
3. Test the health endpoint at `/health`

### 6. Share with Candidate
1. Click "Share" button
2. Copy the URL
3. Send to candidate with instructions to read `EXERCISE_INSTRUCTIONS.md`

## Alternative: GitHub Integration

### 1. Push to GitHub
1. Create a new GitHub repository
2. Push the exercise code to the repository
3. Use CodeSandbox's GitHub integration

### 2. Import from GitHub
1. In CodeSandbox, click "Import from GitHub"
2. Enter your repository URL
3. Select the appropriate branch/folder

## Testing the Setup

### React Exercise Test
1. Open the React sandbox
2. You should see a todo app interface
3. Try adding a todo (it should show an error since API is not implemented)
4. Check browser console for errors

### FastAPI Exercise Test
1. Open the FastAPI sandbox
2. Visit the root URL `/`
3. You should see the exercise instructions
4. Visit `/docs` to see the API documentation
5. Test the `/health` endpoint

## Troubleshooting

### Common Issues

#### React Exercise
- **Dependencies not installed**: Run `npm install` in terminal
- **Port conflicts**: CodeSandbox usually handles this automatically
- **Import errors**: Check that all files are uploaded correctly

#### FastAPI Exercise
- **Python version**: Make sure CodeSandbox uses Python 3.8+
- **Dependencies**: Run `pip install -r requirements.txt`
- **Port issues**: Use `--host 0.0.0.0` flag
- **Module not found**: Check file structure and imports

### CodeSandbox Limitations
- **File upload limits**: Upload files individually if needed
- **Environment variables**: Set them in the CodeSandbox interface
- **Database**: Use in-memory storage (as implemented in exercises)

## Candidate Instructions

### For React Exercise
```
1. Read the EXERCISE_INSTRUCTIONS.md file
2. Complete the implementation in the marked files
3. Test your implementation by:
   - Adding todos
   - Marking them complete
   - Deleting todos
   - Using filters
4. Make sure todos persist after page refresh
```

### For FastAPI Exercise
```
1. Read the EXERCISE_INSTRUCTIONS.md file
2. Complete the implementation in the marked files
3. Test your implementation using:
   - The interactive docs at /docs
   - Or use curl/Postman
4. Make sure all CRUD operations work
```

## Evaluation Tips

### During the Exercise
- Monitor the candidate's approach
- Check if they read the instructions first
- Observe their debugging process
- Note their time management

### After the Exercise
- Review the completed code
- Test all functionality
- Check code quality and structure
- Compare with sample solutions

### Scoring
- Use the evaluation criteria from the sample solutions
- Consider both functionality and code quality
- Account for time constraints
- Look for best practices implementation
