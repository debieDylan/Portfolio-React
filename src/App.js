import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Intro from './components/intro/intro';
import Navbar from './components/navbar/navbar';
import ProjectList from './components/projectList/projectList';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
