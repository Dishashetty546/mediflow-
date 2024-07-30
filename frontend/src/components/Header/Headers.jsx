import React, { useRef, useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import userImg from "../../assets/images/avatar-icon.png";
import { BiMenu } from 'react-icons/bi';

// Navigation links
const navLinks = [
    { path: '/home', display: 'Home' },
    { path: '/doctors', display: 'Find a Doctor' },
    { path: '/services', display: 'Services' },
    { path: '/contact', display: 'Contact Us' },
];

const Headers = () => {
    // References for the header and menu elements
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    // Function to handle sticky header on scroll
    const handleStickyHeader = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('sticky_header');
        } else {
            headerRef.current.classList.remove('sticky_header');
        }
    };

    // Adding scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleStickyHeader);
        return () => {
            window.removeEventListener('scroll', handleStickyHeader);
        };
    }, []);

    // Function to toggle menu visibility
    const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

    return (
        <header ref={headerRef} className='header bg-white py-4'>
            <div className='container flex items-center justify-between'>
                {/* Logo */}
                <div>
                    <img src={logo} alt="Logo" className="w-24 h-auto" />
                </div>

                {/* Menu */}
                <nav className='navigation' ref={menuRef}>
                    <ul className='menu flex items-center gap-[2.7rem]'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink 
                                        to={link.path}  
                                        className={({ isActive }) => 
                                            isActive ? 
                                                'text-primaryColor text-[16px] leading-7 font-[600]' : 
                                                'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                                        }
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                {/* Right navigation user profile and login button */}
                <div className='flex items-center gap-3'>
                    <div className='hidden md:block'>
                        <Link to='/profile'>
                            <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                                <img src={userImg} className='w-full h-full object-cover rounded-full' alt="User Profile" />
                            </figure>
                        </Link>
                    </div>

                    <Link to='/login'>
                        <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                            Login
                        </button>
                    </Link>
                    <span className='md:hidden' onClick={toggleMenu}>
                        <BiMenu className='w-6 h-6 cursor-pointer' />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Headers;
