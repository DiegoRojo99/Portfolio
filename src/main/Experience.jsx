import './Experience.css';

function Experience(){
  const timeline = [
    {
      image: '/img/Deusto.png',
      title: 'Universidad de Deusto',
      date: '2017 - 2022',
      role: 'Computer Engineering Degree',
      description: 'Obtained computer engineering degree at the Universidad de Deusto in Bilbao, Spain.',
      techStack: 'Java, HTML, JavaScript, CSS'
    },
    {
      image: '/img/Creighton.png',
      title: 'Creighton University',
      date: 'August 2021 - December 2021',
      role: 'Exchange Student',
      description: 'Exchange semester at Creighton University in Omaha, NE.',
      techStack: 'Python, R, PHP, HTML'
    },
    {
      image: '/img/Kaseya.png',
      title: 'Kaseya',
      date: 'March 2023 - February 2025',
      role: 'Junior Software Engineer',
      description: 'Worked as part of a cross-functional team developing a data-driven web application for management to track project and delivery status across the organization.',
      achievements: [
        'Built and maintained dashboards aggregating data from 30-40 Jira projects.',
        'Developed weekly live reporting views comparing epic status week-over-week.',
        'Integrated Microsoft Graph API for dynamic mailing lists and team communications.',
        'Implemented employee analytics with export functionality for HR insights.'
      ],
      techStack: 'React, TypeScript, Node.js, Express.js, PostgreSQL, Prisma ORM, Jira API, Microsoft Graph API'
    },
    {
      image: '/img/EarthRoverWhite.png',
      title: 'Earth Rover',
      date: 'March 2025 - Present',
      role: 'Full Stack Engineer',
      description: 'Sole developer responsible for building and maintaining the web application controlling and monitoring a fleet of agricultural robots performing weeding and scouting operations.',
      achievements: [
        'Developed user-facing features for internal field teams and external users.',
        'Designed in-app GIS interface for farm/field definition (replacing external tools like JOSM).',
        'Improved mobile responsiveness for field teams operating on mobile devices.',
        'Owned feature development end-to-end with periodic code review.'
      ],
      techStack: 'Handlebars (HBS), JavaScript, HTML, CSS, Python Flask, PostgreSQL'
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
        {/* Title */}
        <h2>{item.title}</h2>

        {/* Date */}
        <small>{item.date}</small>
        
        {/* Role */}
        {item.role && <p className="bold-text">{item.role}</p>}
        
        {/* Description */}
        <p>{item.description}</p>
        
        {/* Key Achievements */}
        {item.achievements && (
          <div>
            <p className="bold-text">Key Achievements:</p>
            <ul>
              {item.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Tech Stack */}
        <div style={{ marginTop: '12px' }}>
          <p className="bold-text">Tech Stack:</p>
          <p style={{ fontSize: '14px', color: '#666' }}>{item.techStack}</p>
        </div>
        
        <span className={index % 2 === 0 ? 'left-timeline-container-arrow' : 'right-timeline-container-arrow'}></span>
      </div>
    </div>
  )
};

export default Experience;