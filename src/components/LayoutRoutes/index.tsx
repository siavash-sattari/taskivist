import React, { useEffect, useState } from 'react';
import TaskItem from '../TasksSection/TaskItem';
import { useAppDispatch } from '../../store/hooks';
import { modalActions } from '../../store/ModalStore';
import ButtonsSort from '../TasksSection/ButtonsSort';
import { Task } from '../../interfaces';

type Props = {
  title: string;
  tasks: Task[];
};

const LayoutRoutes: React.FC<Props> = ({ title, tasks }) => {
  const [sortedBy, setSortedBy] = useState<string>('');
  const [sortedTasks, setSortedTasks] = useState<Task[]>(tasks);
  const [isListInView1, setIsListInView1] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const openModalHandler = () => {
    dispatch(modalActions.openModalCreateTask());
  };

  const tasksTitle = `${title} (${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'})`;

  useEffect(() => {
    const sortByDate = (order: 'max-date' | 'min-date'): Task[] => {
      const toMillisseconds = (date: string) => Date.parse(date);
      const tasksCopy = [...tasks];
      const sorted = tasksCopy.sort((task1, task2) => {
        const date1 = toMillisseconds(task1.date);
        const date2 = toMillisseconds(task2.date);

        if (date1 < date2) {
          return -1;
        }

        if (date1 > date2) {
          return 1;
        }

        return 0;
      });

      if (order === 'min-date') {
        return sorted;
      }

      if (order === 'max-date') {
        return sorted.reverse();
      }

      return tasks;
    };

    const sortByCompletedStatus = (completed: boolean): Task[] => {
      const tasksCopy = [...tasks];
      const sorted = tasksCopy.sort(task1 => {
        if (task1.completed) {
          return -1;
        }
        return 0;
      });
      if (completed) {
        return sorted;
      }
      if (!completed) {
        return sorted.reverse();
      }
      return tasks;
    };

    if (sortedBy === 'min-date' || sortedBy === 'max-date') {
      setSortedTasks(sortByDate(sortedBy));
    }
    if (sortedBy === '' || sortedBy === 'order-added') {
      setSortedTasks(tasks);
    }
    if (sortedBy === 'completed-first') {
      setSortedTasks(sortByCompletedStatus(true));
    }
    if (sortedBy === 'uncompleted-first') {
      setSortedTasks(sortByCompletedStatus(false));
    }
  }, [sortedBy, tasks]);

  return (
    <section>
      <h1 className='font-medium my-8 text-2xl dark:text-slate-200'>{tasksTitle}</h1>
      <ButtonsSort isListInView1={isListInView1} setIsListInView1={setIsListInView1} sortedBy={sortedBy} setSortedBy={setSortedBy} />
      <ul className={`tasksList mt-4 grid gap-6 ${isListInView1 ? 'grid-cols-1' : 'grid-cols-3 items-end'}`}>
        {sortedTasks.map(task => (
          <TaskItem key={task.id} isListInView1={isListInView1} task={task} />
        ))}
        <li>
          <button
            onClick={openModalHandler}
            className={`border-2 border-slate-300 text-slate-400 w-full rounded-lg border-dashed transition hover:bg-slate-300 hover:text-slate-500 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-300 ${
              isListInView1 ? 'h-32' : 'h-64'
            }`}>
            Add new task
          </button>
        </li>
      </ul>
    </section>
  );
};

export default LayoutRoutes;
