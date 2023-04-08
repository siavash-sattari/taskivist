import React, { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { tasksActions } from '../../store/TasksStore';
import { TrashIcon } from '../icons';
import ModalConfirm from '../Modal/ModalConfirm';

const DeleteTasks: React.FC = () => {
  const dispatch = useAppDispatch();

  const [showModal, setIsModalShown] = useState<boolean>(false);

  const deleteAllDataHandler = () => {
    dispatch(tasksActions.deleteAllData());
  };

  return (
    <>
      {showModal && (
        <ModalConfirm onClose={() => setIsModalShown(false)} text='All data will be deleted permanently.' onConfirm={deleteAllDataHandler} />
      )}
      <button
        onClick={() => setIsModalShown(true)}
        className='flex justify-between items-center border bottom-5 dark:border-slate-700 mt-auto p-3 text-left hover:text-rose-600 dark:hover:text-slate-200 transition'>
        Delete all data
        <TrashIcon />
      </button>
    </>
  );
};

export default React.memo(DeleteTasks);
