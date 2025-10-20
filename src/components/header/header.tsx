
import { useState } from 'react';
import './header.css';

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMenuOpen(false); // Close mobile menu after navigation
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <div className="header-container">
            <div className="header-content">
                <div className="header-logo">
                    <span
                        className="logo-text"
                        onClick={() => handleNavClick('home')}
                        style={{ cursor: 'pointer' }}
                    >
                        Ashutosh
                    </span>
                </div>

                <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <button
                                onClick={() => handleNavClick('home')}
                                className="nav-link"
                            >
                                Home
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => handleNavClick('experience')}
                                className="nav-link"
                            >
                                Experience
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => handleNavClick('projects')}
                                className="nav-link"
                            >
                                Projects
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => handleNavClick('blogs')}
                                className="nav-link"
                            >
                                Blogs
                            </button>
                        </li>
                         <li className="nav-item">
                            <button
                                onClick={() => handleNavClick('stories')}
                                className="nav-link"
                            >
                                Stories
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <button
                        className="menu-toggle"
                        aria-label="Toggle menu"
                        onClick={toggleMenu}
                    >
                        <span className="menu-icon"></span>
                        <span className="menu-icon"></span>
                        <span className="menu-icon"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}