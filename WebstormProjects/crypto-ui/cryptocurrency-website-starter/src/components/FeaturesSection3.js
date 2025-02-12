import React from 'react';
import Image3 from "../assets/img/robot.png";


const FeaturesSection3 = () => {
  return <section className='py-[30px] lg:py-[120px] pl-20'>
    <div className='flex flex-col lg:flex-row'>
      <div className='max-w-[454px] mb-6 lg:mt-10' data-aos='fade-right' data-aos-offset='400'>
        <h3 className='h3 pt-20 mb-6'>Your Power, Your Future</h3>
        <p className='text-gray mb-8 max-w-[408px]'>The power to shape the future of your finance is in your hands. By joining our meme token community, you become a part of a movement — one that fuses innovation, a passionate community, and unstoppable energy, all propelling us straight to the moon! 🚀</p>
        <button className='btn px-8'>Learn more</button>
      </div>
      <div className='flex-1 flex justify-end max-w-[550px]' data-aos='fade-left' data-aos-offset='450'>
        <img src={Image3} alt=""/>
      </div>
    </div>
  </section>;
};

export default FeaturesSection3;
