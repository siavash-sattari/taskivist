import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Routes/Home';
import DoneTasks from '../Routes/DoneTasks';
import TodaysTasks from '../Routes/TodaysTasks';
import ImportantTasks from '../Routes/ImportantTasks';
import HeaderTasks from './HeaderTasks';
import SearchResults from '../Routes/SearchResults';
import Directory from '../Routes/Directory';

const TasksSection: React.FC = () => {
  return (
    <main className=' pt-5 pb-16 px-8 w-8/12 m-auto min-h-screen'>
      <HeaderTasks />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/today' element={<TodaysTasks />} />
        <Route path='/important' element={<ImportantTasks />} />
        <Route path='/done' element={<DoneTasks done={true} title='Completed tasks' />} />
        <Route path='/upcoming' element={<DoneTasks done={false} title='Uncompleted tasks' />} />
        <Route path='/results' element={<SearchResults />} />
        <Route path='/:dir' element={<Directory />} />
      </Routes>
    </main>
  );
};

export default TasksSection;
