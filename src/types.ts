export interface Task {
    id: string; // Unique identifier for the task
    text: string; // Description of the task
    completed: boolean; // Whether the task is completed or not
  }

  export type TaskAction =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'TOGGLE_TASK'; payload: { id: string } }
  | { type: 'DELETE_TASK'; payload: { id: string } };