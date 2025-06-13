import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        
        <ul>
          <li>
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>

          <li>
            <Link to="/login">Employee Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header>
      <h1>
        <Link to="/">
        <img src="\images\ralphsLogo.jpg" alt="Ralph's Logo" style={{ height: "80px" }} />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/about">Events</Link>
        </li>
        <li>
          <Link to="/about">Menu</Link>
        </li>
        <li>
          <Link to="/about">Gallery</Link>
        </li>
        <li>
          <Link to="/about">Contact Us</Link>
        </li>
      </ul>
      {Auth.loggedIn() && Auth.isAdmin() && (
        <a href="/admin">Admin</a>
      )}
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
