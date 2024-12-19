import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* Branding */}
                <NavLink className="navbar-brand" to="/">BrowserRouter</NavLink>
                
                {/* Collapse button for smaller screens */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation items */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                aria-current="page" 
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                to="/movies/Fantasy/2024"
                            >
                                Movies
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
