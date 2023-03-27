import React from 'react';
import { useAppSelector } from '../../store/hooks';
import useCompletedTasks from '../../hooks/useCompletedTasks';
import useTodayTasks from '../../hooks/useTodayTasks';

const AccountData: React.FC = () => {
  const todaysTasks = useTodayTasks();
  const tasks = useAppSelector(state => state.tasks.tasks);

  const todayTasksDone = useCompletedTasks({ tasks: todaysTasks, done: true });
  const allTasksDone = useCompletedTasks({ tasks: tasks, done: true });

  const toggleDarkMode = () => {
    const html = document.querySelector<HTMLHtmlElement>('html')!;
    html.classList.toggle('dark');
  };

  return (
    <section className='p-5 bg-slate-100 flex flex-col w-2/12 fixed top-0 right-0 h-screen dark:bg-slate-800/[.5]'>
      <span className='flex items-center mx-auto'>
        <span className='font-medium'>Hi, Siavash!</span>
        <img src={require('../../assets/avatar.jpeg')} alt='avatar' className='w-10 rounded-full ml-4' />
      </span>
      <button className='mt-8 text-left flex items-center justify-between' onClick={toggleDarkMode}>
        <span className='dark:text-slate-200'>Darkmode</span>
        <div className='w-10 h-5 bg-slate-200 rounded-full flex items-center px-0.5 dark:bg-slate-700 relative flex items-center dark:justify-end'>
          <div className='w-4 h-4 rounded-full bg-violet-500 absolute'></div>
        </div>
      </button>
      {todaysTasks.length !== 0 && (
        <div>
          <span>
            Tasks today {todayTasksDone.length}/{todaysTasks.length}
          </span>
          <div className='bg-slate-200 w-full h-2 rounded-full overflow-hidden dark:bg-slate-700'>
            <div className='bg-violet-500 h-full w-4'></div>
          </div>
        </div>
      )}
      <div>
        <span>
          All tasks {allTasksDone.length}/{tasks.length}
        </span>
        <div className='bg-slate-200 w-full h-2 rounded-full overflow-hidden dark:bg-slate-700'>
          <div className='bg-violet-500 h-full w-4'></div>
        </div>
      </div>
      {todaysTasks.length === 0 && <span>No tasks today</span>}
      <a
        href='/'
        className='mt-auto bg-rose-100 p-2 rounded-md text-rose-600 text-center transition hover:bg-rose-200 dark:bg-slate-800 dark:text-slate-200'>
        Projected by Siavash Sattari
      </a>
    </section>
  );
};

export default AccountData;
