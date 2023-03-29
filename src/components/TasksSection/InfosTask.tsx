import { Task } from '../../interfaces';
import { DateIcon } from '../icons';
import useDate from '../../hooks/useDate';

type Props = {
  task: Task;
  isListInView1: boolean;
};

const InfosTask: React.FC<Props> = ({ task, isListInView1 }) => {
  const dateFormated = useDate(task.date);

  return (
    <div className={`flex flex-col flex-1 ${isListInView1 ? 'mr-6' : ''}`}>
      <div className={`flex items-center justify-between ${isListInView1 ? 'mb-1' : 'mb-2'}`}>
        <span className='block font-medium dark:text-slate-200'>{task.title}</span>
      </div>
      <p title={task.description} className='description mb-2 text-slate-500 dark:text-slate-500 line-clamp-3'>
        {task.description}
      </p>
      <time className='mt-auto flex w-full'>
        <DateIcon className='mr-2 w-4 sm:w-5' /> {dateFormated}
      </time>
    </div>
  );
};

export default InfosTask;
