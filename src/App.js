import { useState } from 'react';
import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Intro from './components/intro/intro';
import Navbar from './components/navbar/navbar';
import ProjectList from './components/projectList/projectList';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <div>
      <Navbar active={menuOpen} setActive={setMenuOpen}/>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
