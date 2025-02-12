import React from 'react';
import { navData } from '../data';
import { CgClose } from 'react-icons/cg';

const NavMobile = ({ setNavMobile }) => {
    return (
        <nav className="lg:hidden bg-gradient-to-r from-gray-800 to-gray-600 fixed top-0 right-0 h-screen w-80 flex flex-col justify-center items-center z-50">            {/* Close button */}
            <div onClick={() => setNavMobile(false)} className="absolute top-2 left-2 cursor-pointer">
                <CgClose className="text-3xl" />
            </div>
            {/* Menu items */}
            <ul className="text-xl flex flex-col gap-y-8 mt-16">
                {navData.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavMobile;
