import React from 'react';
import Image1 from '../assets/img/hero.png';
import {Link} from "react-router-dom";

const FeaturesSection1 = () => {
  return (
      <section className='pb-[30px] lg:pb-[120px] pt-0'>
        <div className='flex flex-col lg:flex-row'>
          <div className='max-w-[454px] pt-20 mb-6 lg:mt-10 text-center lg:text-left' data-aos='fade-right' data-aos-offset='400'>
            <h3 className='h3 mb-6'>Triangle theory</h3>
            <p className='text-gray mb-20'>
              Start with a strong foundation of community support, add some humor and creativity, and watch that triangle form — sharp angles leading straight to the moon! 🚀
            </p>
              <Link to="/ComingSoon">
            <button className='btn px-8 mx-auto lg:mx-0'>Learn more</button> {/* Center button on mobile */}
              </Link>
          </div>
          <div className='flex-1 flex justify-center lg:justify-end' data-aos='fade-left' data-aos-offset='400'>
            <img className='max-w-[550px] mx-auto' src={Image1} alt=""/>
          </div>
        </div>
      </section>
  );
};

export default FeaturesSection1;
