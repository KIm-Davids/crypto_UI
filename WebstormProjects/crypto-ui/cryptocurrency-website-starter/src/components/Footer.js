import React from 'react';
import Logo from '../assets/img/smallersize.png';
import VisaImg from '../assets/img/visa.png'
import SolanaImg from '../assets/img/solana.png'
import MasterCardImg from '../assets/img/mastercard.png'
import {IoLogoYoutube, IoLogoInstagram, IoLogoTwitter} from 'react-icons/io'
import { FaTelegramPlane } from 'react-icons/fa';


const Footer = () => {
  return <footer className='lg:pt-24 pt-0' data-aos='fade-up' data-aos-offset='400'>
          <div className="container mx-auto lg: mb-24">
            <div className='flex flex-col gap-12 lg:flex-row'>
              <div className='flex-1 mx-auto lg:mx-0 mb-6 mx-w-[250px] pt-10'>
                <a href="#">
                  <img src={Logo} alt=""/>
                </a>
              </div>
              <div className='flex flex-1 flex-col gap-16 lg:flex-row'>
                <div className='text-center w-full lg:text-left'>
                  <div className='text-xl font-medium mb-6'>Quick Links</div>
                  <ul className='space-y-4 text-gray'>
                    <li><a className='hover:text-blue transition' href="#">Home</a></li>
                    <li><a className='hover:text-blue transition' href="#">Products</a></li>
                    <li><a className='hover:text-blue transition' href="#">About</a></li>
                    <li><a className='hover:text-blue transition' href="#">Features</a></li>
                    <li><a className='hover:text-blue transition' href="#">Contact</a></li>
                  </ul>
                </div>
                <div className='text-center w-full lg:text-left'>
                  <div className='text-xl font-medium mb-6'>Resources Links</div>
                  <ul className='space-y-4 text-gray'>
                    <li><a className='hover:text-blue transition' href="#">Download Whitepaper</a></li>
                    <li><a className='hover:text-blue transition' href="#">Smart Token</a></li>
                    <li><a className='hover:text-blue transition' href="#">Blockchain Explorer</a></li>
                    <li><a className='hover:text-blue transition' href="#">Crypto API</a></li>
                    <li><a className='hover:text-blue transition' href="#">Interest</a></li>
                  </ul>
                </div>
              </div>
              <div className='flex flex-col flex-1'>
                <div
                 className='lg:ml-[80px]'>
                  <h3 className='h3 font-medium text-center mb-10 lg:text-left'>We accept following payment systems</h3>
                  <div className='flex justify-center items-center gap-6'>
                    <img src={VisaImg} alt=""/>
                    <img src={MasterCardImg} alt=""/>
                    <div className='w-60'><img src={SolanaImg} alt=""/></div>

                  </div>
                </div>
              </div>
            </div>
          </div>
    <div className='py-12'>
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        <div>&copy; 2025 MCGA. All rights reserved.</div>
      <div className='flex text-2xl gap-x-8'>
        <a href="#" className='hover:text-blue transition'><IoLogoYoutube/></a>
        <a href="https://x.com/MCGA_MEME?s=08" className='hover:text-blue transition'><IoLogoTwitter/></a>
        <a href="https://t.me/+W_8w-ljVVowxZjM0" className='hover:text-blue transition'><FaTelegramPlane/></a>
      </div>
      </div>
    </div>
  </footer>
};

export default Footer;
