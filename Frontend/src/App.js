import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Posts from './pages/Posts';
import AddPost from './pages/AddPost';
import Details from './pages/Details';
function App() {
  return (
    <Router>
          <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/posts" element={<Posts/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/AddPost" element={<AddPost/>} />
                <Route path="Posts/Details" element={<Details/>} />
            </Routes>
       </Router>
   
  );
}

export default App;
