import React from 'react';
import LayoutRoutes from '../LayoutRoutes';
import { useAppSelector } from '../../store/hooks';

const Home: React.FC = () => {
  const tasks = useAppSelector(state => state.tasks.tasks);
  return <LayoutRoutes title='All tasks' tasks={tasks} />;
};

export default Home;
