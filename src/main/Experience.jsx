import './Experience.css';

function Experience(){
  const timeline = [
    {
      image: '/img/Deusto.png',
      title: 'Universidad de Deusto',
      date: '2017 - 2022',
      description: 'Obtained computer engineering degree at the Universidad de Deusto in Bilbao, Spain.',
      techStack: 'Main tech stack was Java for different projects and HTML, Javascript and CSS for web development.'
    },
    {
      image: '/img/Creighton.png',
      title: 'Creighton University',
      date: 'August 2021 - December 2021',
      description: 'Exchange semester at Creighton University in Omaha, NE.',
      techStack: 'Different programming oriented courses including languages like Python, R, PHP and HTML.'
    },
    {
      image: '/img/Kaseya.png',
      title: 'Kaseya',
      date: 'March 2023 - February 2025',
      description: "Junior Software Engineer working on a data-driven internal tool to streamline and enhance the R&D department's workflow.",
      techStack: 'Main tech stack is: Frontend: React, HTML and CSS; Backend: Typescript, Node.js and Express.js; Database: PostgreSQL with Prisma ORM.'
    },
    {
      image: '/img/EarthRoverWhite.png',
      title: 'Earth Rover',
      date: 'March 2025 - Present',
      description: 'Full stack developer in full charge of the development of the main web application used to interact with the agricultural robots.',
      techStack: 'Main tech stack is: Frontend: HTML, JS and CSS; Backend: Python; Database: PostgreSQL.'
    }
  ];

  return (
    <div className='section-name' id="experience">
      <h1>Experience</h1>
      <div className="timeline">
        {timeline.map((item, index) => (
          <TimelineItem key={`${item.title}-${index}`} item={item} index={index} />
        ))}
      </div>
      <style>
        {`
          .timeline::after {
            animation-duration: ${timeline.length * 1.5}s;
          }
        `}
      </style>
    </div>
  )
};

function TimelineItem({item, index}) {
  return (
    <div 
      className={`timeline-container ${index % 2 === 0 ? 'left-timeline-container' : 'right-timeline-container'}`}
      style={{ animationDelay: `${index * 1.5}s` }}
    >
      <img src={item.image} alt={item.title} style={{ width: '40px', height: '40px' }} />
      <div className="timeline-text-box">
        <h2>{item.title}</h2>
        <small>{item.date}</small>
        <p>{item.description}</p>
        <p>{item.techStack}</p>
        <span className={index % 2 === 0 ? 'left-timeline-container-arrow' : 'right-timeline-container-arrow'}></span>
      </div>
    </div>
  )
};

export default Experience;