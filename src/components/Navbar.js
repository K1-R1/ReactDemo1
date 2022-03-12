import logo from "../img/logo192.png"
import "../style.css";

function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} />
            <h3>React Facts</h3>
            <h4>React Couurse - Project 1</h4>
        </nav>
    )
}

export default Navbar;