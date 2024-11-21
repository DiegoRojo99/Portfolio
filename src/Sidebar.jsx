import React from 'react';
import './Portfolio.css';
import Avatar from './img/Avatar.jpeg';

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
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
