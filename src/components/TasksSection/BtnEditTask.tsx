import React, { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { tasksActions } from '../../store/TasksStore';
import { OptionsIcon } from '../icons';
import { Task } from '../../interfaces';
import ModalCreateTask from '../Modal/ModalTask';

type Props = {
  task: Task;
};

const BtnEditTask: React.FC<Props> = ({ task }) => {
  const [modalEditTaskOpen, setModalEditTaskOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

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
    <>
      <button
        title='edit task'
        className='transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center dark:hover:text-slate-200 hover:text-slate-700'
        onClick={openModalEditTask}>
        <OptionsIcon className='w-4 sm:w-5 h-4 sm:h-5' />
      </button>
      {modalEditTaskOpen && <ModalCreateTask onClose={closeModalEditTask} task={task} nameForm='Edit task' onConfirm={editTaskHandler} />}
    </>
  );
};

export default BtnEditTask;
