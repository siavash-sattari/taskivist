import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { menusActions } from '../../store/MenuStore';
import LayoutMenus from '../LayoutMenus';
import DarkMode from './DarkMode';
import DeleteTasks from './DeleteTasks';
import TasksDone from './TasksDone';

const AccountData: React.FC = () => {
  const menuOpen = useAppSelector(state => state.menu.menuAccountOpened);

  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuAccount());
  };

  return (
    <LayoutMenus menuOpen={menuOpen} closeMenuHandler={closeMenuHandler} className='top-0 right-0 '>
      <section className='p-5 flex flex-col h-full'>
        <span className='flex items-center mx-auto'>
          <span className='font-medium'>Hi, User!</span>
          <img src={require('../../assets/avatar.jpeg')} alt='cat' className='w-10 rounded-full ml-4' />
        </span>
        <DarkMode />
        <TasksDone />
        <DeleteTasks />
        <a
          target='_blank'
          href='https://github.com/siavash-sattari'
          className='mt-4 bg-rose-100 p-2 rounded-md text-rose-600 text-center transition hover:bg-rose-200 dark:bg-slate-700/[.3] dark:text-slate-200' rel="noreferrer">
          Projected by Siavash Sattari
        </a>
      </section>
    </LayoutMenus>
  );
};

export default AccountData;
