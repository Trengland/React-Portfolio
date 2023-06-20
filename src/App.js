import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import {useState} from 'react';
import Resume from './components/resume/resume';
import { BrowserRouter, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';



function App() {
const [currentPage, setCurrentPage] = useState('/');
return (
  <>
<BrowserRouter>
  <Header setCurrentPage = {
    setCurrentPage
  } />
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes>
          <Route 
            path="/" 
            element={<About currentPage = 'About' />}
          />
          <Route 
            path="/projects" 
            element={<Projects currentPage = 'Projects' />}
          />
          <Route 
            path="/contact" 
            element={<Contact currentPage = 'Contact' />}
          />
          <Route
            path="/resume"
            element={<Resume currentPage = 'Resume' />}
          />
          <Route 
            path="*"
            element={<About />}
          />
        </Routes>
      </div>
    </Router>
    <Footer/>
    </BrowserRouter>
  </>
)};


export default App;