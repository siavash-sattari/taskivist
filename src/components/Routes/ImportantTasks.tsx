import React, { useState, useEffect } from 'react';
import { Task } from '../../interfaces';
import { useAppSelector } from '../../store/hooks';
import LayoutRoutes from '../LayoutRoutes';

const ImportantTasks: React.FC = () => {
  const tasks = useAppSelector(state => state.tasks.tasks);
  const [importantTasks, setImportantTasks] = useState<Task[]>([]);

  useEffect(() => {
    const filteredTasks: Task[] = tasks.filter((task: Task) => task.important);
    setImportantTasks(filteredTasks);
  }, [tasks]);

  return <LayoutRoutes title='Important tasks' tasks={importantTasks}></LayoutRoutes>;
};

export default ImportantTasks;
