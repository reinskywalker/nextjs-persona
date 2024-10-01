import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavLink = ({ href, label, toggleMenu }) => {
    const router = useRouter();
    return (
        <li className={`hover:text-rose-600 cursor-pointer ${
            router.pathname === href ? 'text-rose-600 font-bold dark:text-rose-400' : 'dark:text-gray-300'
        }`}>
            <Link href={href} passHref onClick={toggleMenu}>{label}</Link>
        </li>
    );
};

export default NavLink;
