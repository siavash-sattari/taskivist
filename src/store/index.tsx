import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './TasksStore';
import modalReducer from './ModalStore';

const store = configureStore({
  reducer: { tasks: tasksReducer, modal: modalReducer }
});

export type RootState = ReturnType<typeof store.getState>;

export type AddDispatch = typeof store.dispatch;

export default store;
