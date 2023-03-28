import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '../Tooltip';
import { Task } from '../../interfaces';
import { useAppDispatch } from '../../store/hooks';
import { tasksActions } from '../../store/TasksStore';
import { StarLineIcon, TrashIcon, DateIcon } from '../icons';
import InfosTask from './InfosTask';

const TaskItem: React.FC<{ isListInView1: boolean; task: Task }> = ({ isListInView1, task }) => {
  const dispatch = useAppDispatch();

  const markAsImportantHandler = (id: string) => {
    dispatch(tasksActions.markAsImportant(id));
  };

  const removeTaskHandler = (id: string) => {
    dispatch(tasksActions.removeTask(id));
  };

  return (
    <li key={task.id}>
      <Link
        to={`/${task.dir}`}
        className=' bg-rose-200 text-rose-600 px-4 py-1 rounded-t-md ml-auto mr-4 transition dark:bg-slate-700 dark:text-slate-200 block w-min hover:pb-2 hover:-mt-2'>
        {task.dir}
      </Link>
      <article
        className={`bg-slate-100 rounded-lg p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800/[.5] dark:hover:shadow-transparent ${
          isListInView1 ? 'flex-row h-32' : 'flex-col h-64'
        }`}>
        <InfosTask task={task} isListInView1={isListInView1} />
        <div className={`flex border-slate-200 dark:border-slate-800 ${isListInView1 ? 'items-center' : 'border-t-2 w-full pt-4 mt-4'}`}>
          <span
            className={`${
              task.completed ? 'bg-emerald-200 text-emerald-700 ' : 'bg-yellow-100 text-yellow-700'
            } py-1 px-3 rounded-full font-medium  mr-4`}>
            {task.completed ? 'completed' : 'not completed'}
          </span>
          <Tooltip txt={task.important ? 'unmark as important' : 'mark as important'} className='mr-2 ml-auto'>
            <button onClick={() => markAsImportantHandler(task.id)} className='transition hover:text-slate-700 dark:hover:text-slate-200'>
              <StarLineIcon className={`w-6 h-6 ${task.important ? 'fill-rose-500 stroke-rose-500' : 'fill-none'}`} />
            </button>
          </Tooltip>
          <Tooltip txt='delete task' className='transition hover:text-slate-700 dark:hover:text-slate-200'>
            <button onClick={() => removeTaskHandler(task.id)}>
              <TrashIcon />
            </button>
          </Tooltip>
        </div>
      </article>
    </li>
  );
};

export default TaskItem;
