import React from 'react';
import NavLink from '@atoms/NavLink';

const NavLinks = ({ toggleMenu, links }) => (
    <ul className="hidden md:flex items-center space-x-8">
        {links.map(({ href, label }) => (
            <NavLink key={href} href={href} label={label} toggleMenu={toggleMenu} />
        ))}
    </ul>
);


export default NavLinks