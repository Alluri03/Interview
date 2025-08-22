// Mock API service for tasks
// This simulates a real API with localStorage for persistence

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

  // TODO: Implement this method to get all tasks
  async getAllTasks() {
    // Your implementation here
    // Should return a promise that resolves to an array of task objects
    // Each task should have: { id, text, completed, createdAt }
    throw new Error('Not implemented');
  }

  // TODO: Implement this method to create a new task
  async createTask(text) {
    // Your implementation here
    // Should return a promise that resolves to the created task object
    // The task should have: { id, text, completed: false, createdAt }
    throw new Error('Not implemented');
  }

  // TODO: Implement this method to update a task
  async updateTask(id, updates) {
    // Your implementation here
    // Should return a promise that resolves to the updated task object
    // updates can contain: { text, completed }
    throw new Error('Not implemented');
  }

  // TODO: Implement this method to delete a task
  async deleteTask(id) {
    // Your implementation here
    // Should return a promise that resolves to true if successful
    throw new Error('Not implemented');
  }
}

export default new TaskApiService();
