import React from 'react';
import {Link} from "react-router-dom";

const NewsletterForm = () => {
  return <form className='flex-1 flex flex-col items-start w-full gap-y-6 lg:flex-row lg:gap-x-10'>
    <input className='input text-base text-white placeholder:text-white placeholder:text-base' type="text" placeholder='Enter your mail'/>
    <Link to="/ComingSoon">
    <button className='btn bg-white text-darkblue px-8 hover:bg-white/70'>Subscribe</button>
    </Link>
  </form>;
};

export default NewsletterForm;
