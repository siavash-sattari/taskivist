import React, { useState, useEffect } from 'react';
import { Task } from '../../interfaces';
import LayoutRoutes from '../LayoutRoutes';
import { useAppSelector } from '../../store/hooks';

type Props = {
  done: boolean;
  title: string;
};

const DoneTasks: React.FC<Props> = ({ done, title }) => {
  const tasks = useAppSelector(state => state.tasks.tasks);

  const [tasksDone, setTasksDone] = useState<Task[]>([]);

  useEffect(() => {
    const filteredTasks: Task[] = tasks.filter((task: Task) => {
      if (done) {
        return task.completed;
      } else {
        return !task.completed;
      }
    });
    setTasksDone(filteredTasks);
  }, [tasks, done]);

  return <LayoutRoutes title={title} tasks={tasksDone}></LayoutRoutes>;
};

export default DoneTasks;
