import React from 'react';
import BtnAddTask from '../BtnAddTask';
import { MenuIcon } from '../icons';
import SearchField from './SearchField';
import { useAppDispatch } from '../../store/hooks';
import { menusActions } from '../../store/MenuStore';
import Notification from './Notification';

const HeaderTasks: React.FC = () => {
  const dispatch = useAppDispatch();
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

  const openMenuHeaderHandler = () => {
    dispatch(menusActions.openMenuHeader());
  };
  const openMenuAccountHandler = () => {
    dispatch(menusActions.openMenuAccount());
  };

  return (
    <header className='sm:flex items-center grid grid-cols-3 gap-4 sm:gap-0'>
      <button className='mr-6 block xl:hidden' onClick={openMenuHeaderHandler} title='open menu'>
        <MenuIcon />
      </button>
      <SearchField />
      <div className='text-center basis-1/3'>
        <span className='text-slate-600 dark:text-slate-200 uppercase font-bold text-sm block xl:hidden'>To-do list</span>
        <time dateTime={dateTimeFormat}>{todayDate}</time>
      </div>
      <div className='flex basis-1/3'>
        <Notification />
        <BtnAddTask className='sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400 dark:shadow-slate-900 sm:shadow-transparent' />
        <button onClick={openMenuAccountHandler} className='block xl:hidden'>
          <img src={require('../../assets/avatar.jpeg')} alt='cat' className='w-10 h-10 rounded-full ml-4' />
        </button>
      </div>
    </header>
  );
};

export default HeaderTasks;
