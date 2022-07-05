import React from 'react';
import IgImg1 from '../public/1.jpeg';
import IgImg2 from '../public/2.jpeg';
import IgImg3 from '../public/3.jpeg';
import IgImg4 from '../public/4.jpeg';
import IgImg5 from '../public/5.jpeg';
import IgImg6 from '../public/6.jpeg';
import InstagramImg from './InstagramImg';

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-3xl font-bold'>Follow me on Instagram</p>
      <p className='pb-4'>@AYDev.</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg2} />
        <InstagramImg socialImg={IgImg3} />
        <InstagramImg socialImg={IgImg4} />
        <InstagramImg socialImg={IgImg5} />
        <InstagramImg socialImg={IgImg6} />
      </div>
    </div>
  );
};

export default Instagram;
