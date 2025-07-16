import { Link } from 'react-router-dom';
import './Layout.css';

export default function Layout() {


    return (
        <div className="layout">
            <nav className="navbar">
                <div className="nav-content">
                    <div className="logo">
                        <Link to="/">
                            <img src="./images/custom-logo.png" alt="custom-logo" />
                        </Link>
                    </div>
                    <div className="nav-links">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About Me</Link>
                        <Link to="/services" className="nav-link">Services</Link>
                        <Link to="/project" className="nav-link">Projects</Link>
                        <Link to="/contact" className="nav-link">Contacts</Link>
                        <Link to="/counter" className="nav-link">Counter</Link>
                        <Link to="/signup" className="nav-link">Sign Up</Link>
                        <Link to="/signin" className="nav-link">Sign In</Link>
                        <Link to="/users" className="nav-link">Users</Link>
                        <Link to="/user/:userId" className="nav-link">Profile</Link>
                    </div>
                </div>
            </nav>
        </div>

    );
}
