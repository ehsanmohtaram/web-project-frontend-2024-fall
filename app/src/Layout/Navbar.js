import '../App.css';

import { Link, useLocation } from 'react-router-dom'


function Navbar() {
    const location = useLocation();
    return (
        <nav>
            <ul>
                {location.pathname === '/' && (
                    <>
                        <li class="chosen_a"><Link to="/">Home</Link></li>
                        <li><Link to="/designer">Designer</Link></li>
                        <li><Link to="/player">Player</Link></li>
                    </>
                )}
                {location.pathname === '/designer' && (
                    <>
                        <li><Link to="/">Home</Link></li>
                        <li class="chosen_a"><Link to="/designer">Designer</Link></li>
                        <li><Link to="/designer/questions_management">Question Management</Link></li>
                        <li><Link to="/designer/seed_management">Seed Management</Link></li>
                    </>
                )}
                {location.pathname === '/player' && (
                    <>
                        <li><Link to="/">Home</Link></li>
                        <li class="chosen_a"><Link to="/player">Player</Link></li>
                        <li><Link to="/player/questions_management">Question Management</Link></li>
                        <li><Link to="/player/scores">Scores</Link></li>
                    </>
                )}
            </ul>
            {/* <button id="colorButton" class="dayNightButton">
                Day Time
            </button> */}
    </nav> 
    );
  }
  
  export default Navbar;