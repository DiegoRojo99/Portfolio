import React from 'react';
import './Portfolio.css';
import Avatar from './img/Avatar.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Sidebar(){
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={Avatar} alt="Diego Rojo" className="profile-photo" />
        <div className='profile-info'>
          <h3 id='profile-name'>Diego Rojo</h3>
          <p id='profile-title'>Full-Stack Web Developer</p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#experience">
              <FontAwesomeIcon className='sidebar-icon' icon={faBriefcase} />
              <span className='nav-title'>Experience</span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <FontAwesomeIcon className='sidebar-icon' icon={faCode} />
              <span className='nav-title'>Projects</span>
            </a>
          </li>
        </ul>
        <ul>
          <span>Contact</span>
          <li>
            <a href="https://github.com/DiegoRojo99">
              <FontAwesomeIcon className='sidebar-icon' icon={faGithub} />
              <span className='nav-title'>GitHub</span>
              {/* <FontAwesomeIcon className='external-link' icon={faArrowUpRightFromSquare} /> */}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/diego-rojo-a62229184">
              <FontAwesomeIcon className='sidebar-icon' icon={faLinkedin} />
              <span className='nav-title'>LinkedIn</span>
              {/* <div className='link-container'>
                <FontAwesomeIcon className='external-link' icon={faArrowUpRightFromSquare} />
              </div> */}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
