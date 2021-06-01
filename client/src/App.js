import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './otherPage';
import Fib from './fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className = "App-title">Fib Calculator version 2</h1>
          <Link to = "/">Home</Link>
          <Link to = "/otherage">Other Page</Link>
          <div>
            <Route exact path = "/" component = {Fib} />
            <Route path = "/otherPage" component = {OtherPage} />
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
