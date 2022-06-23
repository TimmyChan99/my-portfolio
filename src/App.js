import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/header/Header';
import './App.scss';
import Home from './components/home/Home';
import Works from './components/works/Works';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <Works />
      </div>
    </Router>
  );
}

export default App;
