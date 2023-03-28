import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { modalActions } from '../../store/ModalStore';

const BtnAddTask: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useAppDispatch();

  const onOpenModal = () => {
    dispatch(modalActions.openModalCreateTask());
  };

  return (
    <>
      <button className={`btn ${className}`} onClick={onOpenModal}>
        Add new task
      </button>
    </>
  );
};

export default BtnAddTask;
