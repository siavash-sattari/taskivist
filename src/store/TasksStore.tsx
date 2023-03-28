import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../interfaces';

const initialState: { tasks: Task[]; directories: string[] } = {
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
      id: 'dhsda1'
    },
    {
      title: 'Study',
      dir: 'School',
      description: 'This is the description for this task.',
      date: '2022-10-06',
      completed: true,
      important: false,
      id: 'fkd8s'
    },
    {
      title: 'Study english',
      dir: 'School',
      description: 'This is the description for this task.',
      date: '2022-10-28',
      completed: true,
      important: false,
      id: 'f9aKD'
    },
    {
      title: 'Fix the TV',
      dir: 'School',
      description: 'This is the description for this task.',
      date: '2022-10-18',
      completed: false,
      important: false,
      id: 'dhsD1'
    },
    {
      title: 'Study',
      dir: 'School',
      description: 'This is the description for this task.',
      date: '2022-12-01',
      completed: false,
      important: false,
      id: 'dhsD1'
    }
  ],
  directories: ['Home', 'School']
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
    },
    deleteAllTasks(state) {
      state.tasks = [];
    },
    createDirectory(state, action: PayloadAction<string>) {
      const newDirectoryName: string = action.payload;
      const directoryAlreadyExists = state.directories.includes(newDirectoryName);
      if (directoryAlreadyExists) return;
      state.directories = [newDirectoryName, ...state.directories];
    }
  }
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
