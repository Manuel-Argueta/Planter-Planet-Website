import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Landing from './components/Landing/Landing';
import Story from './components/Story/Story';
import Problem from './components/Problem/Problem';
import Roadmap from './components/Roadmap/Roadmap.js';

function App() {
  return (
    <div>
    <Navigation />
    <Landing />
    <Story />
    <Problem />
    <Roadmap />
    </div>
  );
}

export default App;
