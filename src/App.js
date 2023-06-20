import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import {useState} from 'react';
import Resume from './components/resume/resume';
// tells us...

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };
// setCurrentPage only exists here in this funcntion,. but we need to use it for the Nav, so we need to pass it down 2 levels.

  return (
    <div className="App">
  <Header setCurrentPage = {
    setCurrentPage
    //this is the PROP that is equal to the above function
  } />
{
  renderPage()
}
  <Footer/>
    </div>
  );
}

export default App;
