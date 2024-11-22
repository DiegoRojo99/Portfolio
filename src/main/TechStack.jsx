const techStackElements = []

function TechStackItem(){
  return (
    <div className="tech-stack-item">
      
    </div>
  )
}

function TechStack(){
  
  return (
    <div id="tech-stack">
      {techStackElements.map((element, index) => <TechStackItem />)}
    </div>
  )
};

export default TechStack;