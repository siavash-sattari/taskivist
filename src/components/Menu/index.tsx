import React from 'react';
import BtnAddTask from '../BtnAddTask';
import Directories from './Directories';
import NavLinks from './NavLinks';
import { useAppDispatch } from '../../store/hooks';
import { tasksActions } from '../../store/TasksStore';

const classLinkActive = 'text-rose-600 bg-violet-100 border-r-4 border-rose-400 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-200';

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();

  const deleteAllTasksHandler = () => {
    dispatch(tasksActions.deleteAllTasks());
  };

  return (
    <header className='bg-slate-100 flex flex-col h-screen w-2/12 fixed left-0 dark:bg-slate-800/[.5]'>
      <h1 className='font-bold uppercase text-center mt-8 text-lg tracking-wide'>To-do list</h1>
      <BtnAddTask className='my-8 mx-4' />
      <NavLinks classActive={classLinkActive} />
      <Directories classActive={classLinkActive} />
      <button className='mx-4 mt-auto mb-8 text-left' onClick={deleteAllTasksHandler}>
        Delete all tasks
      </button>
    </header>
  );
};

export default Menu;
