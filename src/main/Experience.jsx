import './Main.css';
import Kaseya from '../img/Kaseya.png';
import Deusto from '../img/Deusto.png';
import Creighton from '../img/Creighton.png';

function Experience(){
  return (
    <div id="experience">
      <div className="timeline">
        <div className="timeline-container left-timeline-container">
          <img src={Deusto} alt='Universidad de Deusto' />
          <div className="timeline-text-box">
            <h2>Universidad de Deusto</h2>
            <small>2017 - 2022</small>
            <p>Obtained computer engineering degree at the Universidad de Deusto in Bilbao, Spain.</p>
            <span className="left-timeline-container-arrow"></span>
          </div>
        </div>
        <div className="timeline-container right-timeline-container">
          <img src={Creighton} alt='Creighton University' />
          <div className="timeline-text-box">
            <h2>Creighton University</h2>
            <small>August 2021 - December 2021</small>
            <p>Exchange semester at Creighton University in Omaha, NE in the United States.</p>
            <span className="right-timeline-container-arrow"></span>
          </div>
        </div>
        <div className="timeline-container left-timeline-container">
          <img src={Kaseya} alt='Kaseya' />
          <div className="timeline-text-box">
            <h2>Kaseya</h2>
            <small>March 2023 - Now</small>
            <p>Junior Software Engineer working on a data-driven internal tool to streamline and enhance the R&D department's workflows, enabling efficient access to critical metrics and trends.</p>
            <span className="left-timeline-container-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Experience;