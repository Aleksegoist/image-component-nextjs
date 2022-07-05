import Image from 'next/image';
import React from 'react';
import { SliderData } from './SliderData';

const Slider = ({ slides }) => {
  return (
    <div id='gallery'>
      <h1>Gallery of F1</h1>
      <div>
        {SliderData.map((slide, index) => {
          return (
            <Image
              key={index}
              src={slide.image}
              alt='/'
              width='1440'
              height='600'
              objectFit='cover'
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
