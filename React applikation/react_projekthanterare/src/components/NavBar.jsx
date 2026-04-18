import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbutton">Home</Link>
      <Link to="/project" className="navbutton">Project</Link>

    </nav>
  );
}
export default Navbar;