import React from 'react';
import { useAppSelector } from '../../store/hooks';
import useCompletedTasks from '../../hooks/useCompletedTasks';
import useTodayTasks from '../../hooks/useTodayTasks';
import { Task } from '../../interfaces';

const TasksDone: React.FC = () => {
  const todaysTasks = useTodayTasks();
  const tasks = useAppSelector(state => state.tasks.tasks);
  const todayTasksDone = useCompletedTasks({ tasks: todaysTasks, done: true });
  const allTasksDone = useCompletedTasks({ tasks: tasks, done: true });

  const percentageTodayTasks = (todayTasksDone.length * 100) / todaysTasks.length;

  const percentageAllTasks = (allTasksDone.length * 100) / tasks.length;

  const todaysTasksToShow = todaysTasks.slice(0, 3);

  return (
    <>
      {todaysTasks.length !== 0 && (
        <div className='mt-8'>
          <span className='flex justify-between mb-2'>
            <span>Tasks today</span> {todayTasksDone.length}/{todaysTasks.length}
          </span>
          <div className='barProgress'>
            <div style={{ width: percentageTodayTasks + '%' }}></div>
          </div>
        </div>
      )}
      <div className='mt-6'>
        <span className='flex justify-between mb-2'>
          <span>All tasks </span> {allTasksDone.length}/{tasks.length}
        </span>
        <div className='barProgress'>
          <div style={{ width: percentageAllTasks + '%' }}></div>
        </div>
      </div>

      {todaysTasks.length === 0 && <span className='mt-6 block pt-4 border-t-slate-200 dark:border-t-slate-800 border-t-2'>No tasks today</span>}

      {todaysTasks.length > 0 && (
        <div className='mt-8'>
          <span className='mb-2 block'>Today's tasks</span>
          <ul>
            {todaysTasksToShow.map((task: Task) => (
              <li key={task.id} className='py-2 pl-6 text-slate-200 list-item'>
                <span>{task.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default React.memo(TasksDone);
