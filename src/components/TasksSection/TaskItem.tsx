import React from 'react';
import { Link } from 'react-router-dom';
import { Task } from '../../interfaces';
import InfosTask from './InfosTask';
import ActionsTaskItem from './ActionsTaskItem';
import Tooltip from '../Tooltip';

const TaskItem: React.FC<{ isListInView1: boolean; task: Task }> = ({ isListInView1, task }) => {
  return (
    <>
      <li key={task.id}>
        <Tooltip txt={task.dir} className='ml-auto mr-4 w-min'>
          <Link
            to={`/${task.dir}`}
            className='whitespace-nowrap overflow-hidden max-w-[10rem] text-center text-ellipsis bg-rose-200 text-rose-600 px-4 py-1 rounded-t-md transition dark:bg-slate-700 dark:text-slate-200 block hover:bg-rose-300 dark:hover:bg-rose-500'>
            {task.dir}
          </Link>
        </Tooltip>
        <article
          className={`bg-slate-100 rounded-lg p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent ${
            isListInView1 ? 'flex-row h-32' : 'flex-col h-64'
          }`}>
          <InfosTask task={task} isListInView1={isListInView1} />
          <ActionsTaskItem task={task} isListInView1={isListInView1} />
        </article>
      </li>
    </>
  );
};

export default TaskItem;
