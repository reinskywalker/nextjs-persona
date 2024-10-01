import React, { useState } from 'react';
import Link from 'next/link';
import DarkModeToggle from '@molecules/DarkModeToggle';
import NavLinks from '@molecules/NavLinks';
import MobileNavLinks from '@molecules/MobileNavLinks';
import MenuToggle from '@molecules/MenuToggle';

const Navbar = ({ toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/resume', label: 'Resume' },
    ];

    return (
        <nav className="py-5 mb-12 flex justify-between items-center text-gray-800 dark:text-gray-200 sticky top-0 bg-white dark:bg-gray-900 z-50 w-full">

            <Link href="/" passHref>
                <h1 className="text-xl font-bold cursor-pointer">
                    rein <span className="text-rose-600 dark:text-silver">skywalker.</span>
                </h1>
            </Link>

            <div className="hidden md:flex items-center space-x-4">
                <NavLinks links={links} toggleMenu={toggleMenu} />
                <DarkModeToggle toggleDarkMode={toggleDarkMode} />
            </div>

            <div className="md:hidden flex items-center space-x-4">
                <DarkModeToggle toggleDarkMode={toggleDarkMode} />
                <div className="p-2">
                    <MenuToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                </div>
            </div>

            <MobileNavLinks isMenuOpen={isMenuOpen} links={links} toggleMenu={toggleMenu} />
        </nav>
    );
};

export default Navbar;
