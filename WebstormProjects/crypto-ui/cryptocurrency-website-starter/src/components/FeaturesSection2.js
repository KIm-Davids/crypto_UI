import React from 'react';
import image2 from '../assets/img/hero1.png'

const FeaturesSection2 = () => {
    return (
        <section className='py-[30px] lg:py-[120px]'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row justify-center items-center'>
                    <div className='flex-1 lg:absolute lg:left-0 order-2 lg:order-1 mb-6 lg:mb-0' data-aos='fade-right' data-aos-offset='400'>
                        <img src={image2} alt="" className="w-full h-auto" />
                    </div>
                        <div className='flex-1 max-w-[650px] pl-6 text-white' data-aos='fade-left' data-aos-offset='400'>
                        <h3 className='h3 mb-6 text-center lg:text-left'>MCGA: Where the Fun Never Ends!</h3>
                        <p className='text-gray mb-8 text-center lg:text-left'>
                            With MCGA, the fun is just getting started! Dive into the meme revolution where every moment is packed with laughter, excitement, and endless possibilities. Hodl tight – the fun never stops, and neither does the potential for growth!
                        </p>
                        <button className='btn px-8 mb-6 lg:mb-0 mx-auto lg:mx-0 block'>Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection2;
