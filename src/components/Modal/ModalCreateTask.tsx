import React, { useRef, useState } from 'react';
import Modal from './index';
import { Task } from '../../interfaces';
import { useAppSelector } from '../../store/hooks';

const ModalCreateTask: React.FC<{
  onClose: () => void;
  task?: Task;
  nameForm: string;
  onConfirm: (task: Task) => void;
}> = ({ onClose, task, nameForm, onConfirm }) => {
  const directories = useAppSelector(state => state.tasks.directories);

  const today: Date = new Date();
  let day: number = today.getDate();
  let month: number = today.getMonth() + 1;
  const year: number = today.getFullYear();
  if (day < 10) {
    day = +('0' + day);
  }
  if (month < 10) {
    month = +('0' + month);
  }

  const todayDate: string = year + '-' + month + '-' + day;
  const maxDate: string = year + 1 + '-' + month + '-' + day;

  const [description, setDescription] = useState<string>(() => {
    if (task) {
      return task.description;
    }
    return '';
  });
  const [title, setTitle] = useState<string>(() => {
    if (task) {
      return task.title;
    }
    return '';
  });
  const [date, setDate] = useState<string>(() => {
    if (task) {
      return task.date;
    }
    return todayDate;
  });
  const isTitleValid = useRef<Boolean>(false);
  const isDateValid = useRef<Boolean>(false);

  const [isImportant, setIsImportant] = useState<boolean>(() => {
    if (task) {
      return task.important;
    }
    return false;
  });
  const [selectedDirectory, setSelectedDirectory] = useState<string>(() => {
    if (task) {
      return task.dir;
    }
    return directories[0];
  });

  const addNewTaskHandler = (event: React.FormEvent): void => {
    event.preventDefault();

    isTitleValid.current = title.trim().length > 0;
    isDateValid.current = date.trim().length > 0;

    if (isTitleValid.current && isDateValid.current) {
      const newTask: Task = {
        title: title,
        dir: selectedDirectory,
        description: description,
        date: date,
        completed: false,
        important: isImportant,
        id: task?.id ? task.id : Date.now().toString()
      };
      onConfirm(newTask);
      onClose();
    }
  };
  return (
    <Modal onClose={onClose}>
      <section className='bg-slate-200 max-w-lg w-full rounded-lg p-5 flex flex-col justify-start dark:bg-slate-900'>
        <h2 className='font-medium mb-5 text-2xl text-slate-600 dark:text-slate-200'>{nameForm}</h2>
        <form className='flex flex-col stylesInputsField' onSubmit={addNewTaskHandler}>
          <label>
            Title
            <input
              type='text'
              placeholder='e.g, do the homework'
              value={title}
              onChange={({ target }) => setTitle(target.value)}
              className='w-full'
            />
          </label>
          <label>
            Date
            <input type='date' className='w-full' value={date} onChange={({ target }) => setDate(target.value)} min={todayDate} max={maxDate} />
          </label>
          <label>
            Description (optional)
            <textarea
              placeholder='e.g, do the homework'
              className='w-full'
              value={description}
              onChange={({ target }) => setDescription(target.value)}></textarea>
          </label>
          <label>
            Select a directory
            <select className='block w-full' value={selectedDirectory} onChange={({ target }) => setSelectedDirectory(target.value)}>
              {directories.map((dir: string) => (
                <option key={dir} value={dir} className='bg-slate-100 dark:bg-slate-800'>
                  {dir}
                </option>
              ))}
            </select>
          </label>
          <label className='mb-0 flex'>
            <span className='order-1 flex-1'>Mark as important</span>
            <input type='checkbox' className='w-4 h-4 basis-4 mr-2' checked={isImportant} onChange={() => setIsImportant(prev => !prev)} />
          </label>

          <button type='submit' className='btn mt-5'>
            {nameForm}
          </button>
        </form>
      </section>
    </Modal>
  );
};

export default ModalCreateTask;
