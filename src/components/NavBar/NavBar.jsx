import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar({ user }) {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/actors">Actors List</Link>
      <span className="nav-divider"> | </span>
      <Link className="nav-link" to="/">Movies List</Link>
      {user && <h1 className="welcome-message">Welcome, {user}!</h1>}
    </nav>
  );
}