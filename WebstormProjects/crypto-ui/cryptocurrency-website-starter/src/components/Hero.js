import React from 'react';
// import Image from "../assets/img/hero-img.png"
import Image from "../png-transparent-3d-rocket-removebg-preview.png"
import {IoIosArrowDroprightCircle} from 'react-icons/io'


const Hero = () => {
  return <section>
    <div className="container mx-auto">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="flex-1">
          <div className="bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]" data-aos="fade-down" data-aos-delay="400">
            <div className="flex items-center justify-between text-sm lg:text-base">
              {/*<div className="bg-white text-darkblue rounded-full font-medium py-1 px-4">HODL !!!</div>*/}
              {/*<div>To The Moon </div>*/}
        </div>
        </div>
           <h1 className="text-[32px] lg:text-[64px] font-bold leadingg-tight mb-6" data-aos="fade-down" data-aos-delay="400">Join the Meme Revolution: Where Fun Meets Crypto!</h1>
          <p className="max-w-[440px] leading-relaxed mb-8" data-aos="fade-down" data-aos-delay="600">Get involved in a community that’s shaping the future of digital currency with humor at its core.</p>
          <button className="btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base" data-aos="fade-down" data-aos-delay="700">Join Now
          <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl"/>
          </button>
        </div>
          <div  className="flex-1" >
            <img src={Image} alt="" data-aos="fade-up" data-aos-delay="600"/>
          </div>
      </div>
    </div>
  </section>;
};

export default Hero;
