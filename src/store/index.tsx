import { configureStore } from '@reduxjs/toolkit';
import tasksReducer, { tasksMiddleware } from './TasksStore';
import modalReducer from './ModalStore';
import menuReducer from './MenuStore';

const store = configureStore({
  reducer: { tasks: tasksReducer, modal: modalReducer, menu: menuReducer },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(tasksMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AddDispatch = typeof store.dispatch;

export default store;
