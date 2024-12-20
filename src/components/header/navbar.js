import React from 'react';
import { Link } from 'react-scroll'; // Import from react-scroll
import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar w-full h-14 z-10 flex justify-around shadow-md shadow-lg mb-1 items-center'>
      <div className='text-2xl name-div font-bold'>
        <Link className='text-blue-500' to="home" smooth={true} duration={500}>
         NIKHIL KUMAR
        </Link>
      </div>
      <ul className='nav-menu flex gap-8 text-sm font-semibold'>
        <li>
          <Link to="about" smooth={true} duration={500} activeClass="active-link" spy={true}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} activeClass="active-link" spy={true}>
            SKILLS
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500} activeClass="active-link" spy={true}>
            EDUCATION
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} activeClass="active-link" spy={true}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} activeClass="active-link" spy={true}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
