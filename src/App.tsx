import React from 'react';
import Menu from './components/Menu';
import TasksSection from './components/TasksSection';
import AccountData from './components/AccountData';
import Modal from './components/Modal';
import { useAppSelector } from './store/hooks';

const App: React.FC = () => {
  const isModalOpen = useAppSelector(state => state.modal.modalIsOpen);

  return (
    <div className='bg-slate-200 min-h-screen text-slate-600'>
      {isModalOpen && <Modal />}
      <Menu />
      <TasksSection />
      <AccountData />
    </div>
  );
};

export default App;
