import React, { useRef } from 'react';
import Tooltip from '../Tooltip';
import BtnAddTask from '../BtnAddTask';
import { BellIcon, MenuIcon } from '../icons';
import SearchField from './SearchField';
import useVisibility from '../../hooks/useVisibility';
import { useAppDispatch } from '../../store/hooks';
import { menusActions } from '../../store/MenuStore';

const classHasNotification =
  "after:content-[''] after:w-2 after:h-2 after:bg-rose-500 block after:rounded-full after:absolute after:bottom-3/4  after:left-3/4";

const HeaderTasks: React.FC = () => {
  const dispatch = useAppDispatch();

  const refBtnNotification = useRef<HTMLButtonElement>(null);

  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: number = date.getMonth();
  const day: number = date.getDate();

  const monthName: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const todayDate: string = `${year}, ${monthName[month].slice(0, 3)} ${day.toString().padStart(2, '0')}`;

  const dateTimeFormat = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}}`;

  const { elementIsVisible: notificationIsVisible, showElement: showNotifications } = useVisibility([refBtnNotification.current]);

  const openMenuHeaderHandler = () => {
    dispatch(menusActions.openMenuHeader());
  };
  const openMenuAccountHandler = () => {
    dispatch(menusActions.openMenuAccount());
  };

  return (
    <header className='sm:flex items-center grid grid-cols-3 gap-4 sm:gap-0'>
      <button className='mr-6 block xl:hidden' onClick={openMenuHeaderHandler}>
        <MenuIcon />
      </button>
      <SearchField />
      <div className='flex-1 text-center'>
        <span className='text-slate-600 dark:text-slate-200 uppercase font-bold text-sm block xl:hidden'>To-do list</span>
        <time dateTime={dateTimeFormat}>{todayDate}</time>
      </div>
      <div className='flex flex-2'>
        <div className='sm:mr-4 md:mr-6 ml-auto grid place-items-center relative'>
          <Tooltip txt='see notifications'>
            <button ref={refBtnNotification} onClick={showNotifications} className={`relative ${classHasNotification}`}>
              <BellIcon className='fill-violet-600 w-5 h-5 md:w-6 md:h-6 dark:fill-violet-800' />
            </button>
          </Tooltip>
          {notificationIsVisible && (
            <ul className='absolute bg-slate-100 dark:bg-slate-800 top-full rounded-md right-0 p-3 w-max border border-slate-300 dark:border-slate-700'>
              <li>my notification 1</li>
              <li>my notification 2</li>
            </ul>
          )}
        </div>
        <BtnAddTask className='sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400 dark:shadow-slate-900 sm:shadow-transparent' />
        <button onClick={openMenuAccountHandler} className='block xl:hidden'>
          <img src={require('../../assets/avatar.jpeg')} alt='cat' className='w-10 h-10 rounded-full ml-4' />
        </button>
      </div>
    </header>
  );
};

export default HeaderTasks;
