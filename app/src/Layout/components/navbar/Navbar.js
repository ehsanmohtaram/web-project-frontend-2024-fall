import './Navbar.css';
function Navbar() {
    return (
        <nav>
        <a href="./home" class="chosen_a">Home</a>
        <a href="./designer">Designer page</a>
        <a href="./player">Player page</a>
        <button id="colorButton" class="dayNightButton">
            Day Time
        </button>
    </nav> 
    );
  }
  
  export default Navbar;