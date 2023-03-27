import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../interfaces';

const initialState = {
  tasks: [
    {
      title: 'Wash the dishes',
      dir: 'Home',
      description: 'This is the description for this task.',
      date: '2022-08-08',
      completed: false,
      important: false,
      id: 'dY7aN'
    },
    {
      title: 'Do homework',
      dir: 'School',
      description: 'This is the description for this task.',
      date: '2022-10-08',
      completed: true,
      important: true,
      id: 'hYsk8'
    },
    {
      title: 'Check emails',
      dir: 'School',
      description: 'This is the description for this task.',
      date: '2022-06-08',
      completed: true,
      important: false,
      id: 'hd5aS'
    },
    {
      title: 'Go shopping',
      dir: 'School',
      description: 'This is the description for this task.',
      date: '2022-09-08',
      completed: true,
      important: false,
      id: 'hdg9M'
    }
  ]
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addNewTask(state, action: PayloadAction<Task>) {
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask(state, action) {
      const newTasksList = state.tasks.filter(task => task.id !== action.payload);
      state.tasks = newTasksList;
    },
    markAsImportant(state, action: PayloadAction<string>) {
      const newTaskFavorited = state.tasks.find(task => task.id === action.payload);
      newTaskFavorited!.important = !newTaskFavorited!.important;
    }
  }
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
