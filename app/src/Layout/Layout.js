import '../App.css';
import Navbar from './Navbar';
import Home from '../View/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Designer from '../View/Designer';
import Player from '../View/Player';
import D_question_management from '../View/D_question_management';
import Seed_management from '../View/Seed_management';
import Scores from '../View/Scores';
import P_question_management from '../View/P_question_management';

function Layout() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/designer" element={<Designer />} />
                <Route path="/player" element={<Player />} />
                <Route path="/designer/question_management" element={<D_question_management />} />
                <Route path="/designer/seed_management" element={<Seed_management />} />
                <Route path="/player/scores" element={<Scores />} />
                <Route path="/player/question_management" element={<P_question_management />} />
            </Routes>
        </Router>

    );
}

export default Layout;