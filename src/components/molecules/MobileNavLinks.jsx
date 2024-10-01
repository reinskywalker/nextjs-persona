import React from 'react';
import NavLink from '@atoms/NavLink';

const MobileNavLinks = ({ isMenuOpen, toggleMenu, links }) => (
    isMenuOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 text-center space-y-4 p-4 shadow-lg z-40">
            {links.map(({ href, label }) => (
                <NavLink key={href} href={href} label={label} toggleMenu={toggleMenu} />
            ))}
        </ul>
    )
);

export default MobileNavLinks;