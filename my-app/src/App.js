import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';

function App() {

  return (
    <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>

        <Routes>
          <Route path="/about" element={<About />} > 
          </Route>
          <Route path="/users" element={<Users />} >
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
