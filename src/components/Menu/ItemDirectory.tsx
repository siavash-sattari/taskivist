import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { tasksActions } from '../../store/TasksStore';
import { TrashIcon, EditIcon } from '../icons';
import ModalConfirm from '../Modal/ModalConfirm';
import ModalDirectory from '../Modal/ModalDirectory';

type Props = {
  dir: string;
  classActive: string;
};

const ItemDirectory: React.FC<Props> = ({ dir, classActive }) => {
  const route = useLocation();
  const currentPath = route.pathname;

  const dispatch = useAppDispatch();

  const [modalIsShown, setModalIsShown] = useState<boolean>(false);
  const [modalDirIsShown, setModalDirIsShown] = useState<boolean>(false);

  const closeModalDirectoryHandler = () => {
    setModalDirIsShown(false);
  };

  const deleteDirectoryHandler = () => {
    dispatch(tasksActions.deleteDirectory(dir));
  };

  const confirmEditDirNameHandler = (dirName: string) => {
    dispatch(
      tasksActions.editDirectoryName({
        previousDirName: dir,
        newDirName: dirName
      })
    );
  };

  return (
    <>
      {modalDirIsShown && (
        <ModalDirectory
          onClose={closeModalDirectoryHandler}
          onConfirm={confirmEditDirNameHandler}
          dirName={dir}
          title='Edit directory name'
          btnText='Edit'
        />
      )}
      {modalIsShown && (
        <ModalConfirm
          onClose={() => setModalIsShown(false)}
          onConfirm={deleteDirectoryHandler}
          text='This directory and all its tasks will be deleted.'
        />
      )}
      <li className={`flex items-center pr-4 pl-9 py-2 itemDirectory ${currentPath === '/dir/' + dir ? classActive : ''}`}>
        <NavLink
          to={`/dir/${dir}`}
          title={dir}
          className='hover:text-rose-600 dark:hover:text-slate-200 transition text-ellipsis whitespace-nowrap overflow-hidden max-w-[7rem]'>
          {dir}
        </NavLink>
        {dir !== 'Main' && (
          <div className='ml-auto buttonsDir'>
            <button title='edit directory name' onClick={() => setModalDirIsShown(true)}>
              <EditIcon className='w-5 h-5 mr-2' />
            </button>
            <button title='delete directory' onClick={() => setModalIsShown(true)}>
              <TrashIcon className='w-5 h-5' />
            </button>
          </div>
        )}
      </li>
    </>
  );
};

export default ItemDirectory;
