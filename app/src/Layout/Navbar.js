import '../App.css';

import { Link, useLocation } from 'react-router-dom'


function Navbar() {
    const location = useLocation();
    return (
        <nav>
            {location.pathname === '/' && (
                <>
                    <Link className="chosen_a" to="/">Home</Link>
                    <Link to="/designer">Designer</Link>
                    <Link to="/player">Player</Link>
                </>
            )}
            {location.pathname === '/designer' && (
                <>
                <Link to="/">Home</Link>
                <Link className="chosen_a" to="/designer">Designer</Link>
                <Link to="/designer/question_management">Question Management Page</Link>
                <Link to="/designer/seed_management">Seed Management Page</Link>
            </>
            )}
            {location.pathname === '/designer/question_management' && (
                <>
                <Link to="/">Home</Link>
                <Link to="/designer">Designer</Link>
                <Link className="chosen_a" to="/designer/question_management">Question Management Page</Link>
                <Link to="/designer/seed_management">Seed Management Page</Link>
            </>
            )}
            {location.pathname === '/designer/seed_management' && (
                <>
                <Link to="/">Home</Link>
                <Link to="/designer">Designer</Link>
                <Link to="/designer/question_management">Question Management Page</Link>
                <Link className="chosen_a" to="/designer/seed_management">Seed Management Page</Link>
            </>
            )}
            {location.pathname === '/player' && (
                <>
                <Link to="/">Home</Link>
                <Link className="chosen_a" to="/player">Player</Link>
                <Link to="/player/scores">Scores Page</Link>
                <Link to="/player/question_management">Question Management Page</Link>
            </>
            )}
            {location.pathname === '/player/scores' && (
                <>
                <Link to="/">Home</Link>
                <Link to="/player">Player</Link>
                <Link className="chosen_a" to="/player/scores">Scores Page</Link>
                <Link to="/player/question_management">Question Management Page</Link>
            </>
            )}
            {location.pathname === '/player/question_management' && (
                <>
                <Link to="/">Home</Link>
                <Link to="/player">Player</Link>
                <Link to="/player/scores">Scores Page</Link>
                <Link className="chosen_a" to="/player/question_management">Question Management Page</Link>
            </>
            )}
            {/* <button id="colorButton" class="dayNightButton">
                Day Time
            </button> */}
    </nav> 
    );
  }
  
  export default Navbar;