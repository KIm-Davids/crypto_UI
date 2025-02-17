import React from 'react';
import Logo from '../assets/img/smallersize.png'
import Nav from './Nav'
import AccountBtns from './AccountBtns'
import {CgMenuRight} from 'react-icons/cg'


const Header = ({setNavMobile}) => {
    return (
        <header className='pt-0 lg:pt-[30px] py-0' data-aos="fade-down" data-aos-delay="900" data-aos-duration="2000">
            <div className="container mx-auto flex items-center justify-between ">
                <a href="#">
                    {/* Add class to resize the logo */}
                    <img src={Logo} alt="" className="w-25"/> {/* Adjust width to 8rem (128px) */}
                </a>
                <div className="hidden lg:flex gap-x-[55px]">
                    <Nav/>
                    <AccountBtns/>
                </div>
                <div onClick={() => setNavMobile(true)} className="lg:hidden cursor-pointer">
                    <CgMenuRight className="text-2xl"/>
                </div>
            </div>
        </header>

    )
};

export default Header;
