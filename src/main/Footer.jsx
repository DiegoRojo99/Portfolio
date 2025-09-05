import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
  const currentYear = new Date().getFullYear();
  return (
    <footer id='Footer' className="section-name">
      <div className="footer-content">
        <p>© {currentYear} Diego Rojo. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/DiegoRojo99" target="_blank" rel="noreferrer" aria-label="Check my GitHub">
            <FontAwesomeIcon className='link-icon' icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/diego-rojo-a62229184" target="_blank" rel="noreferrer" aria-label="Check my LinkedIn">
            <FontAwesomeIcon className='link-icon' icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  )
}