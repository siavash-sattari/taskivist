import React from 'react';
import Tooltip from '../Tooltip';
import BtnAddTask from '../BtnAddTask';
import { BellIcon, SearchIcon } from '../icons';

const classHasNotification =
  "after:content-[''] after:w-2 after:h-2 after:bg-rose-500 block after:rounded-full after:absolute after:bottom-3/4  after:left-3/4";

const HeaderTasks: React.FC = () => {
  return (
    <header className='flex items-center'>
      <form className='flex-1 relative'>
        <label htmlFor='search' className='sr-only' />
        <input type='search' id='search' placeholder='Search task' className='inputStyles w-full' />
        <SearchIcon className='absolute w-5 right-4 top-3.5 text-slate-400' />
      </form>
      <time dateTime='2022-08-02' className='flex-1 text-center'>
        2022, 14 Ago
      </time>
      <div className='flex flex-1'>
        <Tooltip txt='see notifications' className='mr-6 ml-auto'>
          <button className={`relative ${classHasNotification}`} title='notifications'>
            <BellIcon className='fill-violet-600 w-6 h-6' />
          </button>
        </Tooltip>
        <BtnAddTask />
      </div>
    </header>
  );
};

export default HeaderTasks;
