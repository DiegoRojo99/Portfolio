import React from 'react';
import './Portfolio.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCode, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Sidebar({ isCollapsed, toggleSidebar }) {
  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      <div className="profile">
        <img src={'/img/Avatar.jpeg'} alt="Diego Rojo" className="profile-photo" />
        {
          isCollapsed ? <></> :
          <div className='profile-info'>
            <h3 id='profile-name'>Diego Rojo</h3>
            <p id='profile-title'>Full-Stack Web Developer</p>
          </div>
        }
      </div>
      <nav>
        <ul>
          <li>
            <a href="#experience">
              <FontAwesomeIcon className='sidebar-icon' icon={faBriefcase} />
              {
                isCollapsed ? <></> :
                <span className='nav-title'>Experience</span>
              }
            </a>
          </li>
          <li>
            <a href="#projects">
              <FontAwesomeIcon className='sidebar-icon' icon={faCode} />
              {
                isCollapsed ? <></> :
                <span className='nav-title'>Projects</span>
              }
            </a>
          </li>
          <li>
            <a href="#stack">
              <FontAwesomeIcon className='sidebar-icon' icon={faLayerGroup} />
              {
                isCollapsed ? <></> :
                <span className='nav-title'>Stack</span>
              }
            </a>
          </li>
        </ul>
        <ul>
          <span className='sidebar-group-title'>Contact</span>
          <li>
            <a href="https://github.com/DiegoRojo99" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className='sidebar-icon' icon={faGithub} />
              {
                isCollapsed ? <></> :
                <span className='nav-title'>GitHub</span>
              }
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/diego-rojo-a62229184" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className='sidebar-icon' icon={faLinkedin} />
              {
                isCollapsed ? <></> :
                <span className='nav-title'>LinkedIn</span>
              }
            </a>
          </li>
        </ul>
      </nav>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? '>' : '<'}
      </button>
    </aside>
  );
};

export default Sidebar;
