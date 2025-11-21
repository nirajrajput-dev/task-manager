import type { Task, TaskAction } from './types';

// The reducer function: (state, action) => newState
export function tasksReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload]; // Add the new task

    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );

    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload.id);

    default:
      throw new Error(`Unhandled action type: ${(action as TaskAction).type}`);
  }
}
