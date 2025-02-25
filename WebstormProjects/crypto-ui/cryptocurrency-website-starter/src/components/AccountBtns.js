import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AccountBtns = () => {
    return (
        <div className="flex items-center font-medium">
            <a className="hover:text-blue transition" href="/ComingSoon">
                Login
            </a>
            <span className="mx-6 text-white/20 font-thin">|</span>

            {/* Use Link to navigate to ComingSoon */}
            <Link to="/ComingSoon">
                <button className="btn h-[52px] text-base px-8">
                    Download Whitepaper
                </button>
            </Link>
        </div>
    );
};

export default AccountBtns;
