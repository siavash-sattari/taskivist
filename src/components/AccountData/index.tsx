import React from 'react';

const AccountData: React.FC = () => {
  return (
    <section className='p-5 bg-slate-100 flex flex-col col-span-2'>
      <span className='flex items-center mx-auto'>
        <span className='font-medium'>Hi, Siavash!</span>
        <img src={require('../../assets/avatar.jpeg')} alt='avatar' className='w-10 rounded-full ml-4' />
      </span>
      <a href='/' className='mt-auto bg-rose-100 p-2 rounded-md text-rose-600 text-center transition hover:bg-rose-200'>
        Projected by Siavash Sattari
      </a>
    </section>
  );
};

export default AccountData;
