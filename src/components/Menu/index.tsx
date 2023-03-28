import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { menusActions } from '../../store/MenuStore';
import BtnAddTask from '../BtnAddTask';
import LayoutMenus from '../LayoutMenus';
import Directories from './Directories';
import NavLinks from './NavLinks';

const classLinkActive = 'text-rose-600 bg-violet-100 border-r-4 border-rose-400 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-200';

const Menu: React.FC = () => {
  const menuOpen = useAppSelector(state => state.menu.menuHeaderOpened);
  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuHeader());
  };

  return (
    <>
      <LayoutMenus menuOpen={menuOpen} closeMenuHandler={closeMenuHandler} className='left-0'>
        <header className='h-full'>
          <h1 className='font-bold uppercase text-center mt-8 text-lg tracking-wide hidden xl:block'>To-do list</h1>
          <BtnAddTask className='my-8 mx-4' />
          <NavLinks classActive={classLinkActive} />
          <Directories classActive={classLinkActive} />
        </header>
      </LayoutMenus>
    </>
  );
};

export default Menu;
