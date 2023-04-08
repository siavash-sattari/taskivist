import React from 'react';
import { ViewIcon1, ViewIcon2 } from '../icons';

type Props = {
  isListInView1: boolean;
  setIsListInView1: (status: boolean) => void;
  sortedBy: string;
  setSortedBy: (option: string) => void;
};

const sortValues = [
  { value: 'order-added', title: 'Order added' },
  { value: 'min-date', title: 'Earlier first' },
  { value: 'max-date', title: 'Later first' },
  { value: 'completed-first', title: 'Completed first' },
  { value: 'uncompleted-first', title: 'Uncompleted first' }
];

const ButtonsSort: React.FC<Props> = ({ isListInView1, setIsListInView1, sortedBy, setSortedBy }) => {
  return (
    <div className='flex children-styles'>
      <button onClick={() => setIsListInView1(true)} title='view in list'>
        <ViewIcon1 className={isListInView1 ? 'text-violet-600' : ''} />
      </button>
      <button onClick={() => setIsListInView1(false)} title='view in grid'>
        <ViewIcon2 className={!isListInView1 ? 'text-violet-600' : ''} />
      </button>
      <select className='ml-auto inputStyles' value={sortedBy} onChange={({ target }) => setSortedBy(target.value)}>
        <option value='' disabled>
          Sort by
        </option>
        {sortValues.map(val => (
          <option key={val.value} value={val.value} className='bg-slate-100 dark:bg-slate-800'>
            {val.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ButtonsSort;
