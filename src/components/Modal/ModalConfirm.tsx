import React from 'react';
import Modal from './index';

const ModalConfirm: React.FC<{
  onConfirm: () => void;
  onClose: () => void;
  text: string;
}> = ({ onConfirm, onClose, text }) => {
  const onConfirmAndClose = () => {
    onConfirm();
    onClose();
  };
  return (
    <Modal onClose={onClose} title='Are you sure?'>
      <p className='text-slate-500'>{text}</p>
      <div className='mt-7 ml-auto'>
        <button onClick={onClose}>Cancel</button>
        <button onClick={onConfirmAndClose} className='btn ml-6'>
          Confirm
        </button>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
