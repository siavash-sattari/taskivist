import React, { useState, useEffect, useRef } from 'react';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import { SearchIcon } from '../icons';
import { Task } from '../../interfaces';
import useDate from '../../hooks/useDate';
import useSearchQuery from '../../hooks/useSearchQuery';
import useVisibility from '../../hooks/useVisibility';

const ItemSearch: React.FC<{ task: Task }> = ({ task }) => {
  const dateFormated = useDate(task.date);
  return (
    <li key={task.id} className='py-2'>
      <Link to='/' className='flex justify-between transition hover:text-rose-500 dark:hover:text-slate-200'>
        <span>{task.title}</span>
        <span className=''>{dateFormated}</span>
      </Link>
    </li>
  );
};

const SearchField: React.FC = () => {
  const navigate = useNavigate();

  const searchResultsRef = useRef<HTMLInputElement>(null);
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const matchedTasks = useSearchQuery(searchInputValue);

  const {
    elementIsVisible: listResultsVisible,
    showElement: showListResults,
    closeElement: closeListResults
  } = useVisibility([searchResultsRef.current!], () => setSearchInputValue(''));

  const navigateToSearchResults = () => {
    navigate({
      pathname: 'results',
      search: createSearchParams({
        q: searchInputValue
      }).toString()
    });
  };

  useEffect(() => {
    if (searchInputValue.trim().length > 0) {
      showListResults();
    } else {
      closeListResults();
    }
  }, [closeListResults, searchInputValue, showListResults]);

  return (
    <form className='flex-1 relative'>
      <label htmlFor='search' className='sr-only'></label>
      <input
        type='search'
        id='search'
        placeholder='Search task'
        ref={searchResultsRef}
        value={searchInputValue}
        onChange={({ target }) => setSearchInputValue(target.value)}
        className='inputStyles w-full'
      />
      <SearchIcon className='absolute w-5 right-4 top-3.5 text-slate-400' />
      {listResultsVisible && (
        <div className='absolute bg-slate-100 rounded-md w-full top-14 p-3 dark:bg-slate-800 z-10'>
          {matchedTasks.length ? (
            <>
              <ul>
                {matchedTasks.map(task => (
                  <ItemSearch key={task.id} task={task} />
                ))}
              </ul>
              <button
                onClick={navigateToSearchResults}
                className='bg-rose-100 w-full p-2 rounded-md text-rose-600 dark:bg-slate-700/[.3] dark:text-slate-200'>
                All results for "{searchInputValue}"
              </button>
            </>
          ) : (
            <span>No tasks found</span>
          )}
        </div>
      )}
    </form>
  );
};

export default SearchField;
