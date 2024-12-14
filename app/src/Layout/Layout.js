import './Layout.css';
import Navbar from './components/navbar/Navbar';
import Home from '../view/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Layout() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </Router>

    );
  }
  
  export default Layout;