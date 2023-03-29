import React, { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { tasksActions } from '../../store/TasksStore';
import Tooltip from '../Tooltip';
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
      <Tooltip txt='edit task'>
        <button
          className='transition w-6 sm:w-8 h-6 sm:h-8 grid place-items-center dark:hover:text-slate-200 hover:text-slate-700'
          onClick={openModalEditTask}>
          <OptionsIcon className='w-4 sm:w-5 h-4 sm:h-5' />
        </button>
      </Tooltip>
      {modalEditTaskOpen && <ModalCreateTask onClose={closeModalEditTask} task={task} nameForm='Edit task' onConfirm={editTaskHandler} />}
    </>
  );
};

export default BtnEditTask;
