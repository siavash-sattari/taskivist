import { Task } from '../../interfaces';
import BtnEditTask from './BtnEditTask';
import BtnMarkAsImportant from './BtnMarkAsImportant';
import BtnDeleteTask from './BtnDeleteTask';
import BtnToggleCompleted from './BtnToggleCompleted';

type Props = {
  task: Task;
  isListInView1: boolean;
};

const ActionsTaskItem: React.FC<Props> = ({ task, isListInView1 }) => {
  return (
    <>
      <div
        className={`flex border-dashed border-slate-200 dark:border-slate-700/[.3] ${
          isListInView1 ? 'items-center' : 'border-t-2 w-full pt-4 mt-4'
        }`}>
        <BtnToggleCompleted taskCompleted={task.completed} taskId={task.id} />
        <BtnMarkAsImportant task={task} />
        <BtnDeleteTask taskId={task.id} />
        <BtnEditTask task={task} />
      </div>
    </>
  );
};

export default ActionsTaskItem;
