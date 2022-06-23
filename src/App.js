import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/header/Header';
import './App.scss';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
