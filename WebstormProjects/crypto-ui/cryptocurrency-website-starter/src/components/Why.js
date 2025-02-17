import React from 'react';

import Image from '../assets/img/why-img.png'
import {Link} from "react-router-dom";

const Why = () => {
  return <section className='section'>
    <div className="container mx-auto">
    <div className='flex flex-col items-center gap-x-8 lg:flex-row'>
      <div className='order-2 lg:order-1' data-aos='fade-right' data-aos-offset='400'>
        <img src={Image} alt=""/>
      </div>
      <div className='order-1 lg:order-2 max-w-[400px]' data-aos='fade-left' data-aos-offset='400'>
        <h2 className='section-title'>Why you should choose MCGA ?</h2>
        <p className='section-subtitle'>Not just another meme token—it's the future of fun, with real value behind the laugh.</p>
        <Link to="/ComingSoon">
        <button className='btn px-6'>Learn more</button>
        </Link>
      </div>
    </div>
    </div>
  </section>;
};

export default Why;
