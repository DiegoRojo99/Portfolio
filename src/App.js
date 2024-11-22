import './App.css';
import Experience from './main/Experience';
import Projects from './main/Projects';
import TechStack from './main/TechStack';
import Sidebar from './Sidebar';
import { useState } from 'react';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="App">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <main className={`content ${isCollapsed ? 'expanded' : ''}`}>
        <Experience />
        <Projects />
        <TechStack />
      </main>
    </div>
  );
}

export default App;
