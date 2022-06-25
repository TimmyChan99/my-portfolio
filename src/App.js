import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/header/Header';
import './App.scss';
import Home from './components/home/Home';
import Works from './components/works/Works';
import AboutMe from './components/aboutMe/AboutMe';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <Works />
        <AboutMe />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
