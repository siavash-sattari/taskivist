import React, { useRef } from 'react';
import Tooltip from '../Tooltip';
import BtnAddTask from '../BtnAddTask';
import { BellIcon, MenuIcon } from '../icons';
import SearchField from './SearchField';
import useVisibility from '../../hooks/useVisibility';

const classHasNotification =
  "after:content-[''] after:w-2 after:h-2 after:bg-rose-500 block after:rounded-full after:absolute after:bottom-3/4  after:left-3/4";

const HeaderTasks: React.FC = () => {
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

  return (
    <header className='flex items-center'>
      <button className='mr-6'>
        <MenuIcon />
      </button>
      <SearchField />
      <time dateTime={dateTimeFormat} className='flex-1 text-center'>
        {todayDate}
      </time>
      <div className='flex flex-1'>
        <div className='mr-6 ml-auto grid place-items-center relative'>
          <Tooltip txt='see notifications'>
            <button ref={refBtnNotification} onClick={showNotifications} className={`relative ${classHasNotification}`}>
              <BellIcon className='fill-violet-600 w-6 h-6 dark:fill-violet-800' />
            </button>
          </Tooltip>
          {notificationIsVisible && (
            <ul className='absolute bg-slate-100 dark:bg-slate-800 top-full rounded-md right-0 p-3 w-max'>
              <li>my notification 1</li>
              <li>my notification 2</li>
            </ul>
          )}
        </div>
        <BtnAddTask />
      </div>
    </header>
  );
};

export default HeaderTasks;
