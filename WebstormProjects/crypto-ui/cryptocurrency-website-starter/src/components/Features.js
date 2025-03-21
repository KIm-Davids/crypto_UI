import React from 'react';
import FeaturesSection1 from "./FeaturesSection1";
import FeaturesSection2 from "./FeaturesSection2";
import FeaturesSection3 from "./FeaturesSection3";

const Features = () => {
  return <section className='pt-12 lg:pt-24 bg-gradient-to-r from-gray-800 to-gray-600'>
            <div className='container mx-auto'>
              <div className='text-center max-w-[750px] mx-auto mb-24'>
                <h2 className='section-title' data-aos='fade-up' data-aos-offset='400'>Market sentiments, portfolio, and run the infrastructure of your choice</h2>
              </div>
              <FeaturesSection1/>
              <FeaturesSection2/>
              <FeaturesSection3/>
            </div>
        </section>;
};

export default Features;
