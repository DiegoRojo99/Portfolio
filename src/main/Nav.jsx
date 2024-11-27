import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.css';
import { faBriefcase, faCode, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (
    <nav>
      <div className="nav-content">
        <ul className="nav-list">
          <li>
            <a href="#experience">
              <FontAwesomeIcon className="nav-icon" icon={faBriefcase} />
              <span className="nav-title">Experience</span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <FontAwesomeIcon className="nav-icon" icon={faCode} />
              <span className="nav-title">Projects</span>
            </a>
          </li>
          <li>
            <a href="#tech-stack">
              <FontAwesomeIcon className="nav-icon" icon={faLayerGroup} />
              <span className="nav-title">Stack</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
