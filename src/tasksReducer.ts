import type { Task } from './types';

// Define the types of actions our reducer can handle
export type TaskAction =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'TOGGLE_TASK'; payload: { id: string } }
  | { type: 'DELETE_TASK'; payload: { id: string } };

// The reducer function: (state, action) => newState
export function tasksReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload]; // Add the new task
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed } // Toggle 'completed' for the matching task
          : task
      );
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload.id); // Remove the matching task
    default:
      // If an unknown action type is dispatched, throw an error
      // This helps catch bugs where invalid actions are sent
      // throw new Error(`Unhandled action type: ${action.type}`);
      throw new Error(`Unhandled action type: ${(action as TaskAction).type}`);
  }
}