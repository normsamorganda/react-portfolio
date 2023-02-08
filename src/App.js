import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Project from './components/Project';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({duration:1000});
  },[])


  return (
    <div className="App">
      <div className='first-page'>
        <NavBar/>
        <div className='divider'>
        <Banner/>
        </div>
      </div>
      <div className='second-page'>
        <Project/>
      </div>
      <AboutMe/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
