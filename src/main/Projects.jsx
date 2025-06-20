import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Projects.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    name: "Park Hopper",
    tech: ["React", "Typescript", "Javascript", "Node.js", "CSS", "MySQL", "Firebase", "Express.js"],
    // website: "https://parkhopper.live",
    github: "https://github.com/DiegoRojo99/park-hopper-frontend",
    description: 'Allows a user to keep track of theme park attractions waiting times and set up alerts.',
    image: 'ParkHopper.png'
  },
  {
    name: "The Blockbuster Arena",
    tech: ["React", "Typescript", "CSS"],
    website: "https://the-blockbuster-arena.netlify.app/",
    github: "https://github.com/DiegoRojo99/The-Blockbuster-Arena",
    description: 'Different movie based games including guessing movies and actors based on hints.',
    image: 'TheBlockbusterArena.png'
  },
  {
    name: "Play Hive",
    tech: ["Typescript", "React", "CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
    website: "https://play-hive.vercel.app/",
    github: "https://github.com/DiegoRojo99/Play-Hive",
    description: 'Your ultimate companion for tracking and enhancing your gaming experience.',
    image: 'PlayHive.png'
  },
  {
    name: "The Football Feed",
    tech: ["React", "Javascript", "CSS"],
    website: "https://the-football-feed.netlify.app/",
    github: "https://github.com/DiegoRojo99/The-Football-Feed ",
    description: 'Your place to find the latest football highlights.',
    image: 'TheFootballFeed.png'
  },
];

function ProjectSkillsItem({item}){
  return (
    <div className='project-stack-item'>
      <span className='project-stack-name'>{item}</span>
    </div>
  )
}

function ProjectItem({project}){
  return (
    <div className="project-item">
      <img className='project-cover' src={project.image ? require(`../img/${project.image}`) : ''} alt={project.name} />
      <div className='project-content'>
        <h3 className='project-title'>{project.name}</h3>
        <span className='project-description'>{project.description}</span>
        <div className='project-stack'>
          {project.tech.map((item, index) => <ProjectSkillsItem key={`${project.name}-${index}`} item={item}/>)}
        </div>
        <div className='project-links'>
          { project.github ? 
            <div className='project-link-container'>
              <a className='project-link' href={project.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon className='project-icon' icon={faGithub} />
                <span>GitHub</span>
              </a>
            </div> 
          : 
            <></>
          }

          { project.website ? 
            <div className='project-link-container'>
              <a className='project-link' href={project.website} target="_blank" rel="noreferrer">
                <FontAwesomeIcon className='project-icon' icon={faGlobe} />
                <span>Website</span>
              </a>
            </div> 
          : 
            <></>
          }
        </div>
      </div>
    </div>
  )
}


function Projects(){

  return (
    <div className='section-name' id="projects">
      <h1>Projects</h1>
      <div id='project-grid'>
        {projects.map((project, index) => <ProjectItem project={project} key={index} />)}
      </div>
    </div>
  )
};

export default Projects;