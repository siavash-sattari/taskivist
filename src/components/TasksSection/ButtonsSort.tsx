import React, { useState } from 'react';
import { ViewIcon1, ViewIcon2 } from '../icons';

type Props = {
  isListInView1: boolean;
  setIsListInView1: (status: boolean) => void;
};

const ButtonsSort: React.FC<Props> = ({ isListInView1, setIsListInView1 }) => {
  const [sortedBy, setSortedBy] = useState('');

  return (
    <div className='flex children-styles'>
      <button onClick={() => setIsListInView1(true)}>
        <ViewIcon1 className={isListInView1 ? 'text-violet-600' : ''} />
      </button>
      <button onClick={() => setIsListInView1(false)}>
        <ViewIcon2 className={!isListInView1 ? 'text-violet-600' : ''} />
      </button>
      <select className='ml-auto inputStyles' value={sortedBy} onChange={({ target }) => setSortedBy(target.value)}>
        <option value='' disabled>
          Sort by
        </option>
        <option value='min-date'>New</option>
        <option value='max-date'>Last</option>
        <option value='completed-first'>Completed first</option>
        <option value='uncompleted-first'>Uncompleted first</option>
      </select>
    </div>
  );
};

export default ButtonsSort;
