import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Project from './components/Project';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
function App() {
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
