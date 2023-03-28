import React, { useState } from 'react';
import { ArrowIcon } from '../icons';
import ContentDirectories from './ContentDirectories';

const Directories: React.FC<{ classActive: string }> = ({ classActive }) => {
  const [isDirectoriesOpen, setIsDirectoriesOpen] = useState<boolean>(true);

  const toggleDirectoriesOpen = () => {
    setIsDirectoriesOpen(prevState => !prevState);
  };

  return (
    <div className='py-4'>
      <button className={`flex items-center w-full mx-4 mb-2 ${isDirectoriesOpen ? 'dark:text-slate-200' : ''}`} onClick={toggleDirectoriesOpen}>
        <ArrowIcon className={`w-3 h-3 mr-2 rotate-90 transition ${isDirectoriesOpen ? 'rotate-180' : ''}`} />
        Directories
      </button>
      <div className={isDirectoriesOpen ? 'visible' : 'hidden'}>
        <ContentDirectories classActive={classActive} />
      </div>
    </div>
  );
};

export default Directories;
