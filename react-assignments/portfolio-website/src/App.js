import './App.css';
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetails from './components/Projects/ProjectDetails';
import ContactPage from './components/Contact/Contact';
import SkillsPage from './components/Skills/Skills';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
