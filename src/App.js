import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Projects from './components/projects/projects';
// import {useState} from 'react';
import Resume from './components/resume/resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
// const [currentPage, setCurrentPage] = useState('/');
return (
  <> 

<BrowserRouter baseName={"/"} >
<Header/>
        <Routes>
          <Route 
            path="/" 
            element={<About />}
          />
          <Route 
            path="/projects" 
            element={<Projects />}
          />
          <Route 
            path="/contact" 
            element={<Contact />}
          />
          <Route
            path="/resume"
            element={<Resume />}
          />
          <Route 
            path="*"
            element={<About />}
          />
        </Routes>
    <Footer/>
    </BrowserRouter>
  </>
)};


export default App;