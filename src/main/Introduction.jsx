import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Introduction.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Introduction(){
  return (
    <div className='section-name' id="introduction">
      <div id="intro-info">
        <h1 className='intro-info-text'>Diego Rojo</h1>
        <h3 className='intro-info-text green'>Full-Stack Web Developer</h3>
        <div id='intro-description' className="intro-info-text">
          <p>
            A passionate Full-Stack Developer specializing 
            in building user-friendly web applications 
            with React, Node.js, and TypeScript. 
          </p>
          <p>
            Whether it's bringing a design to life or designing an efficient API, 
            I'm always excited to tackle challenges.
          </p>
        </div>
        <div className="intro-links">
          <div className="intro-link-container">
            <a href="https://github.com/DiegoRojo99" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className='link-icon' icon={faGithub} />
            </a>
          </div>
          <div className="intro-link-container">
            <a href="https://www.linkedin.com/in/diego-rojo-a62229184" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className='link-icon' icon={faLinkedin} />
            </a>
          </div>
        </div>
        <a href="/Diego_Rojo_CV.pdf" download className="green-button">
          Download CV
        </a>
      </div>
      <div id="intro-photo-container">
        <img id="intro-photo" src={'/img/AvatarWithNoBackground.png'} alt="Diego Rojo" />
      </div>
    </div>
  )
}