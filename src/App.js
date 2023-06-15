import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Projects from './components/projects/projects';



function App() {
  return (
    <div className="App">
  <Header/>
  <About/>
  <Projects/>
  <Contact/>
  <Footer/>
    </div>
  );
}

export default App;
