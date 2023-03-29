import React, { useState } from 'react';
import { Task } from '../../interfaces';
import { OptionsIcon, DateIcon } from '../icons';
import { useAppDispatch } from '../../store/hooks';
import { tasksActions } from '../../store/TasksStore';
import ModalCreateTask from '../Modal/ModalTask';
import Tooltip from '../Tooltip';
import useDate from '../../hooks/useDate';

const InfosTask: React.FC<{ task: Task; isListInView1: boolean }> = ({ task, isListInView1 }) => {
  const [modalEditTaskOpen, setModalEditTaskOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const dateFormated = useDate(task.date);

  const closeModalEditTask = () => {
    setModalEditTaskOpen(false);
  };

  const openModalEditTask = () => {
    setModalEditTaskOpen(true);
  };

  const editTaskHandler = (task: Task) => {
    dispatch(tasksActions.editTask(task));
  };

  return (
    <div className='flex flex-col flex-1'>
      <div className={`flex items-center justify-between ${isListInView1 ? 'mb-1' : 'mb-2'}`}>
        <span className='block font-medium dark:text-slate-200'>{task.title}</span>
        <Tooltip txt='edit task'>
          <button
            className='className="rounded-full hover:bg-slate-200 w-6 sm:w-8 h-6 sm:h-8 grid place-items-center dark:hover:bg-slate-700/[.3]'
            onClick={openModalEditTask}>
            <OptionsIcon className='w-4 sm:w-5 h-4 sm:h-5' />
          </button>
        </Tooltip>
        {modalEditTaskOpen && <ModalCreateTask onClose={closeModalEditTask} task={task} nameForm='Edit task' onConfirm={editTaskHandler} />}
      </div>
      <p title={task.description} className='description text-slate-500 dark:text-slate-500 line-clamp-3'>
        {task.description}
      </p>
      <time className='mt-auto flex w-full'>
        <DateIcon className='mr-2 w-4 sm:w-5' /> {dateFormated}
      </time>
    </div>
  );
};

export default InfosTask;
