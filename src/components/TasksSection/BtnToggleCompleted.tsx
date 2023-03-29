import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { tasksActions } from '../../store/TasksStore';
import { CloseIcon, CheckIcon } from '../icons';

type Props = {
  taskCompleted: boolean;
  taskId: string;
  isListInView1: boolean;
};

const BtnToggleCompleted: React.FC<Props> = ({ taskCompleted, taskId, isListInView1 }) => {
  const dispatch = useAppDispatch();

  const toggleTaskCompleted = (id: string) => {
    dispatch(tasksActions.toggleTaskCompleted(id));
  };

  return (
    <button
      title={taskCompleted ? 'mark as uncompleted' : 'mark as completed'}
      className={`${taskCompleted ? 'bg-emerald-200 text-emerald-800 ' : 'bg-amber-200 text-amber-800 '} ${
        isListInView1 ? 'order-2 mr-0 sm:order-first sm:mr-4' : 'mr-4 order-0'
      } rounded-full font-medium`}
      onClick={() => toggleTaskCompleted(taskId)}>
      <span className='block py-1 px-3 absolute invisible sm:static sm:visible'>{taskCompleted ? 'completed' : 'uncompleted'}</span>
      <span className=' sm:hidden w-6 h-6 grid place-items-center'>
        {taskCompleted ? <CheckIcon className='w-3 h-3' /> : <CloseIcon className='w-3 h-3' />}
      </span>
    </button>
  );
};

export default BtnToggleCompleted;