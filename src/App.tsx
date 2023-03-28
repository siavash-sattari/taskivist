import React from 'react';
import Menu from './components/Menu';
import TasksSection from './components/TasksSection';
import AccountData from './components/AccountData';
import ModalCreateTask from './components/Modal/ModalCreateTask';
import { Task } from './interfaces';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { modalActions } from './store/ModalStore';
import { tasksActions } from './store/TasksStore';
import Footer from './components/Footer';

const App: React.FC = () => {
  const modalCreateTaskOpen = useAppSelector(state => state.modal.modalCreateTaskOpen);

  const dispatch = useAppDispatch();

  const closeModalCreateTask = () => {
    dispatch(modalActions.closeModalCreateTask());
  };

  const createNewTaskHandler = (task: Task) => {
    dispatch(tasksActions.addNewTask(task));
  };

  return (
    <div className='bg-slate-200 min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400'>
      {modalCreateTaskOpen && <ModalCreateTask onClose={closeModalCreateTask} nameForm='Add a task' onConfirm={createNewTaskHandler} />}
      <Menu />
      <TasksSection />
      <Footer />
      <AccountData />
    </div>
  );
};

export default App;
