import './TechStack.css';

const mainTechStack = [
  { name: "React", image: 'React.png' },
  { name: "Typescript", image: 'Typescript.png' },
  { name: "Javascript", image: 'Javascript.png' },
  { name: "Node.js", image: 'Node.jpeg' },
  { name: "MySQL", image: 'MySQL.png' },
  { name: "PostgreSQL", image: 'Postgresql.png' },
  { name: "CSS", image: 'CSS.png' },
  { name: "HTML", image: 'HTML.png' }
]

const otherTechStack = [
  { name: "Java", image: 'Java.png' },
  { name: "Firebase", image: 'Firebase.png' },
  { name: "Python", image: 'Python.png' }
]

function TechStackItem({element}){
  return (
    <div className="tech-stack-item">
      <img alt={element.name} src={`/img/${element.image}`} />
      <p className='tech-stack-name'>{element.name}</p>   
    </div>
  )
}

function TechStack(){
  return (
    <div className='section-name' id="tech-stack">
      <h1>Tech Stack</h1>
      <h4>Main Tech Stack</h4>
      <div className="tech-stack-grid">
        {mainTechStack.map((element, index) => <TechStackItem element={element} />)}
      </div>
      <h4>Other Knowledge</h4>
      <div className="tech-stack-grid">
        {otherTechStack.map((element, index) => <TechStackItem element={element} />)}
      </div>
      <h4>Languages</h4>
      <div className="tech-stack-grid">
        <div className="tech-stack-item">
          <img alt="English" src={`/img/English.png`} />  
          <p className='tech-stack-name'>English</p>
          <p className='language-title'>C1</p>
        </div>
        <div className="tech-stack-item">
          <img alt="Spanish" src={`/img/Spanish.png`} />
          <p className='tech-stack-name'>Spanish</p>
          <p className='language-title'>Native</p>
        </div>
        <div className="tech-stack-item">
          <img alt="French" src={`/img/French.png`} />
          <p className='tech-stack-name'>French</p>
          <p className='language-title'>A2</p>
        </div>
      </div>
    </div>
  )
};

export default TechStack;