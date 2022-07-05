import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] px-auto py-16 text-center m-auto'>
      <h1 className='font-bold text-3xl p-4'>Travel Photos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src='https://images.unsplash.com/photo-1655890938539-7257cdd5ea34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
            alt='/'
            layout='responsive'
            width='677'
            height='451'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1656329020255-b5b450d45704?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='/'
            layout='responsive'
            width='215'
            height='217'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1656080668140-c74a678a43af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='/'
            layout='responsive'
            width='215'
            height='217'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1655988880656-cd2eed3dcea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='/'
            layout='responsive'
            width='215'
            height='217'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1655593881985-eb42464018b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80'
            alt='/'
            layout='responsive'
            width='215'
            height='217'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
