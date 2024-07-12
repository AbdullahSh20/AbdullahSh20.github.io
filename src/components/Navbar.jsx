import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex items-center h-16 px-4 border-b md:px-6 justify-between">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4">
                <HomeIcon className="h-6 w-6" />
                <span className="sr-only">Home</span>
            </Link>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <MenuIcon className="h-6 w-6" />
                </button>
            </div>
            <nav className={`fixed inset-0 bg-white z-10 p-4 pt-16 md:pt-0 md:relative md:p-0 md:bg-transparent transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <ul className="flex flex-col md:flex-row items-center gap-5 md:gap-6 text-sm lg:text-base font-medium">
                    <li>
                        <Link to="/education" className="navbar-link hover:underline text-base lg:text-custom" onClick={() => setIsMenuOpen(false)}>
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link to="/experiences" className="navbar-link hover:underline text-base lg:text-custom" onClick={() => setIsMenuOpen(false)}>
                            Experiences
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="navbar-link hover:underline text-base lg:text-custom" onClick={() => setIsMenuOpen(false)}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/activities" className="navbar-link hover:underline text-base lg:text-custom" onClick={() => setIsMenuOpen(false)}>
                            Activities
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="navbar-link hover:underline text-base lg:text-custom" onClick={() => setIsMenuOpen(false)}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

function HomeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    );
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );
}

export default Navbar;
