import './App.css';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import About from './components/AboutComponent';
import SignUp from './components/SignUpComponent';
import { Routes as Switch, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Header/>
        <Switch>
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/*" element={<Home />} />
        </Switch>
      </div>
  );
}

export default App;
