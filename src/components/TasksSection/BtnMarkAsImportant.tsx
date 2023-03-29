import React from 'react';
import { Task } from '../../interfaces';
import { useAppDispatch } from '../../store/hooks';
import { tasksActions } from '../../store/TasksStore';
import { StarLineIcon } from '../icons';

type Props = {
  task: Task;
};

const BtnMarkAsImportant: React.FC<Props> = ({ task }) => {
  const dispatch = useAppDispatch();

  const markAsImportantHandler = (id: string) => {
    dispatch(tasksActions.markAsImportant(id));
  };

  return (
    <button
      title={task.important ? 'unmark as important' : 'mark as important'}
      onClick={() => markAsImportantHandler(task.id)}
      className='transition hover:text-slate-700 dark:hover:text-slate-200 ml-auto'>
      <StarLineIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${task.important ? 'fill-rose-500 stroke-rose-500 ' : 'fill-none'}`} />
    </button>
  );
};

export default BtnMarkAsImportant;
