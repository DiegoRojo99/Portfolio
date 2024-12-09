import './App.css';
import Separator from './extras/Separator';
import Experience from './main/Experience';
import Footer from './main/Footer';
import Introduction from './main/Introduction';
import Projects from './main/Projects';
import Skills from './main/Skills';

function App() {

  let separatorText = `
    Hi, I'm Diego Rojo | 
    Born in Logroño, Spain | 
    Live in Dundalk, Ireland | 
    Full-Stack Web Developer
  `;

  return (
    <div className="App">
      {/* <Nav /> */}
      <main className="content">
        <Introduction />
        <Separator text={separatorText} />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
