import React from 'react';
import {Link} from "react-router-dom";

const Calculate = () => {
  return (
      <section className='section'>
        <div className="container mx-auto">
          <div className='text-center'>
            <h2 className='section-title' data-aos='fade-up' data-aos-offset='400'>Why MCGA is the Best!</h2>
            <p className='section-subtitle text-lg mb-16 max-w-[622px] mx-auto' data-aos='fade-up'
               data-aos-offset='450'>
              Join the revolution with our meme token that offers more than just laughs. Get in early and enjoy unique
              rewards!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First item */}
            <div className="flex flex-col items-center" data-aos='fade-right' data-aos-offset='350'>
              <h3 className="text-2xl font-bold mb-4">🚀 Unique Tokenomics</h3>
              <p className="text-lg mb-4">Our meme token isn't just for fun—it's designed with real value and growth in
                mind. Join the community and watch your investment grow!</p>
            </div>

            {/* Second item */}
            <div className="flex flex-col items-center" data-aos='fade-left' data-aos-offset='350'>
              <h3 className="text-2xl font-bold mb-4">🎉 Community Driven</h3>
              <p className="text-lg mb-4">Become part of a fun, energetic, and passionate community. With regular
                giveaways and a strong presence in the meme world, you're never alone!</p>
            </div>

            <div className="flex flex-col items-center text-white lg:text-darkblue" data-aos='fade-right'
                 data-aos-offset='350'>
              <h3 className="text-2xl font-bold mb-4">🔥 Huge Potential</h3>
              <p className="text-lg mb-4">Get in early and be part of something big. Our meme token is rapidly gaining
                attention and offers great opportunities for early investors.</p>
            </div>

            {/* Fourth item */}
            <div className="flex flex-col items-center text-white lg:text-darkblue" data-aos='fade-left'
                 data-aos-offset='350'>
              <h3 className="text-2xl font-bold mb-4">💎 Rewards for Holders</h3>
              <p className="text-lg mb-4">Enjoy exclusive rewards just for holding! Our token rewards loyal investors
                with regular airdrops and giveaways.</p>
            </div>


          </div>
          <div className="flex justify-center mt-8">
            <Link to="/ComingSoon" className="btn btn-primary">
              Buy Now & Join the Fun
            </Link>
          </div>
        </div>
      </section>
  );
};

export default Calculate;
