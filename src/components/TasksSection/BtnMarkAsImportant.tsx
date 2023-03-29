import React from 'react';
import { Task } from '../../interfaces';
import { useAppDispatch } from '../../store/hooks';
import { tasksActions } from '../../store/TasksStore';
import { StarLineIcon } from '../icons';

type Props = {
  taskId: string;
  taskImportant: boolean;
};

const BtnMarkAsImportant: React.FC<Props> = ({ taskId, taskImportant }) => {
  const dispatch = useAppDispatch();

  const markAsImportantHandler = () => {
    dispatch(tasksActions.markAsImportant(taskId));
  };

  return (
    <button
      title={taskImportant ? 'unmark as important' : 'mark as important'}
      onClick={markAsImportantHandler}
      className='transition hover:text-slate-700 dark:hover:text-slate-200 ml-auto'>
      <StarLineIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${taskImportant ? 'fill-rose-500 stroke-rose-500 ' : 'fill-none'}`} />
    </button>
  );
};

export default React.memo(BtnMarkAsImportant);
