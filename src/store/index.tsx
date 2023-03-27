import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './TasksStore';

const store = configureStore({
  reducer: { tasks: tasksReducer }
});

export type RootState = ReturnType<typeof store.getState>;

export type AddDispatch = typeof store.dispatch;

export default store;
