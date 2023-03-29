import useDescriptionTitle from '../../hooks/useDescriptionTitle';
import useTodayTasks from '../../hooks/useTodayTasks';
import LayoutRoutes from '../LayoutRoutes';

const TodaysTasks: React.FC = () => {
  const todaysTasks = useTodayTasks();

  useDescriptionTitle("Today's tasks", "Today's tasks");

  return <LayoutRoutes title="Today's tasks" tasks={todaysTasks}></LayoutRoutes>;
};

export default TodaysTasks;
