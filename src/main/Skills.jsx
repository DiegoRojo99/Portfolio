import './Skills.css';

const mainSkills = [
  { name: "React", image: 'skills/React.png' },
  { name: "Typescript", image: 'skills/Typescript.png' },
  { name: "Javascript", image: 'skills/Javascript.png' },
  { name: "Node.js", image: 'skills/Node.png' },
  { name: "Next.js", image: 'skills/next-js.png' },
  { name: "MySQL", image: 'skills/MySQL.png' },
  { name: "PostgreSQL", image: 'skills/Postgresql.png' },
  { name: "CSS", image: 'skills/CSS.svg' },
  { name: "HTML", image: 'skills/HTML.png' },
  { name: "Prisma", image: 'skills/Prisma.png' },
  { name: "Express.js", image: 'skills/Express.png' },
]

const otherSkills = [
  { name: "Java", image: 'skills/Java.png' },
  { name: "Firebase", image: 'skills/Firebase.png' },
  { name: "Python", image: 'skills/Python.png' },
  { name: "R", image: 'skills/R.png' },
  { name: "PHP", image: 'skills/PHP.png' },
]

function SkillItem({element}){
  return (
    <div className="skills-item">
      <img alt={element.name} src={`/img/${element.image}`} />
      <p className='skills-name'>{element.name}</p>   
    </div>
  )
}

function Skills(){
  return (
    <div className='section-name' id="skills">
      <h1>Skills</h1>
      <h4>Main Tech Stack</h4>
      <div className="skills-grid">
        {mainSkills.map((element, index) => <SkillItem key={element.name} element={element} />)}
      </div>
      <h4>Other Knowledge</h4>
      <div className="skills-grid">
        {otherSkills.map((element, index) => <SkillItem key={element.name} element={element} />)}
      </div>
      <h4>Languages</h4>
      <div className="skills-grid">
        <div className="skills-item">
          <img className='flag' alt="English" src={`/img/English.png`} />  
          <p className='skills-name'>English</p>
          <p className='language-title'>C1</p>
        </div>
        <div className="skills-item">
          <img className='flag' alt="Spanish" src={`/img/Spanish.png`} />
          <p className='skills-name'>Spanish</p>
          <p className='language-title'>Native</p>
        </div>
        <div className="skills-item">
          <img className='flag' alt="French" src={`/img/French.png`} />
          <p className='skills-name'>French</p>
          <p className='language-title'>A2</p>
        </div>
      </div>
    </div>
  )
};

export default Skills;