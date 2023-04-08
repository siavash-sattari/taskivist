import LayoutRoutes from '../LayoutRoutes';
import { useAppSelector } from '../../store/hooks';
import useCompletedTasks from '../../hooks/useCompletedTasks';
import useDescriptionTitle from '../../hooks/useDescriptionTitle';

type Props = {
  done: boolean;
  title: string;
};

const DoneTasks: React.FC<Props> = ({ done, title }) => {
  const tasks = useAppSelector(state => state.tasks.tasks);
  const { tasks: tasksDone } = useCompletedTasks({ tasks, done });

  useDescriptionTitle('All tasks done', title);

  return <LayoutRoutes title={title} tasks={tasksDone}></LayoutRoutes>;
};

export default DoneTasks;
