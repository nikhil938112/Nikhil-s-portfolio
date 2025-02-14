import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar w-full h-14 z-10 flex justify-around shadow-md shadow-lg mb-1 items-center'>
      <div className='text-2xl name-div font-bold'>
        <Link className='text-blue-500 hover:text-blue-700 transition-colors' to="home" smooth={true} duration={500}>
          NIKHIL KUMAR
        </Link>
      </div>
      <ul className='nav-menu flex gap-4 md:gap-8 text-sm cursor-pointer font-semibold'>
        <li>
          <Link to="about" smooth={true} duration={500} activeClass="active-link" spy={true} className="hover:text-blue-500 transition-colors">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} activeClass="active-link" spy={true} className="hover:text-blue-500 transition-colors">
            SKILLS
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500} activeClass="active-link" spy={true} className="hover:text-blue-500 transition-colors">
            EDUCATION
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} activeClass="active-link" spy={true} className="hover:text-blue-500 transition-colors">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} activeClass="active-link" spy={true} className="hover:text-blue-500 transition-colors">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;