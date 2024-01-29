import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className="flex items-center h-16 px-4 border-b md:px-6">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4">
                <HomeIcon className="h-6 w-6" />
                <span className="sr-only">Home</span>
            </Link>
            <nav className="font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
                <Link to="/education" className="navbar-link hover:underline text-base lg:text-custom">
                    Education
                </Link>
                <Link to="/experiences" className="navbar-link hover:underline text-base lg:text-custom">
                    Experiences
                </Link>
                <Link to="/projects" className="navbar-link hover:underline text-base lg:text-custom">
                    Projects
                </Link>
                <Link to="/certificates" className="navbar-link hover:underline text-base lg:text-custom">
                    Certificates
                </Link>
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

export default Navbar;
