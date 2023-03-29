import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { tasksActions } from '../../store/TasksStore';
import Tooltip from '../Tooltip';
import { CloseIcon, CheckIcon } from '../icons';

type Props = {
  taskCompleted: boolean;
  taskId: string;
};

const BtnToggleCompleted: React.FC<Props> = ({ taskCompleted, taskId }) => {
  const dispatch = useAppDispatch();

  const toggleTaskCompleted = (id: string) => {
    dispatch(tasksActions.toggleTaskCompleted(id));
  };

  return (
    <Tooltip txt={taskCompleted ? 'mark as uncompleted' : 'mark as completed'} className='mr-4'>
      <button
        className={`${taskCompleted ? 'bg-emerald-200 text-emerald-800 ' : 'bg-yellow-100 text-yellow-700 '} rounded-full font-medium`}
        onClick={() => toggleTaskCompleted(taskId)}>
        <span className='block py-1 px-3 absolute invisible sm:static sm:visible'>{taskCompleted ? 'completed' : 'uncompleted'}</span>
        <span className='p-1 block sm:hidden'>{taskCompleted ? <CheckIcon className='w-3 h-3' /> : <CloseIcon className='w-3 h-3' />}</span>
      </button>
    </Tooltip>
  );
};

export default BtnToggleCompleted;
