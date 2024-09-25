import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
  {
    path: "https://www.youtube.com",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://github.com",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://www.instagram.com",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://www.linkedin.com",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
  },
];

const quickLinks01 = [
  { path: "/home", display: 'Home' },
  { path: "/about", display: "About Us" },
  { path: "/blog", display: "Blog" },
];

const quickLinks02 = [
  { path: "/find-a-doctor", display: "Find a Doctor" },
  { path: "/appointment", display: "Request an Appointment" },
  { path: "/location", display: "Find a Location" },
  { path: "/opinion", display: "Get an Opinion" },
];

const quickLinks03 = [
  { path: "/donate", display: "Donate" },
  { path: "/contact", display: "Contact Us" },
];

const Footer = () => {
  const location = useLocation();
  const year = new Date().getFullYear();

  // List of paths where the footer should be hidden
  const hiddenPaths = ['/services', '/find-a-doctor', '/contact', '/doctors'];

  // Check if the current path is in the hiddenPaths array
  const isFooterVisible = !hiddenPaths.includes(location.pathname);

  return ( 
    isFooterVisible && (
      <footer className='pb-16 pt-10'>
        <div className="container">
          <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
            {/* Logo and Copyright */}
            <div>
              <img src={logo} alt="Logo" className="w-20 h-auto" />
              <p className='text-[16px] leading-7 font-[400] text-textColor'>
                © {year} Developed by Muhibur Rahman. All rights reserved.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className='font-bold'>Quick Links</h3>
              <ul>
                {quickLinks01.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-[16px] leading-7 text-textColor hover:underline">
                      {link.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='font-bold'>Services</h3>
              <ul>
                {quickLinks02.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-[16px] leading-7 text-textColor hover:underline">
                      {link.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='font-bold'>Get in Touch</h3>
              <ul>
                {quickLinks03.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-[16px] leading-7 text-textColor hover:underline">
                      {link.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links Section */}
            <div>
              <h3 className='font-bold'>Follow Us</h3>
              <div className="flex gap-[10px]">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-500 hover:text-primaryColor"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
