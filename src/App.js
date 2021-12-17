import './App.css';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import About from './components/AboutComponent';
import SignUp from './components/SignUpComponent';
import ContactUs from './components/ContactUsComponent';
import { Routes as Switch, Route } from 'react-router-dom';
import Timer from './components/TimerComponent';
import Todo from './components/TodoComponent';

function App() {
  return (
      <div className="App">
        <Header/>
        <Switch>
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/" element={<Home />} />
            <Route path="timer" element={<Timer />} />
            <Route path="todo" element={<Todo />} />
        </Switch>
      </div>
  );
}

export default App;
