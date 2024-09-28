import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar({ toggleDarkMode }) {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="py-5 mb-12 flex justify-between items-center text-gray-800 dark:text-gray-200 sticky top-0 bg-white dark:bg-gray-900 z-50 w-full">
            <Link href="/" passHref>
                <h1 className="text-xl font-bold cursor-pointer">
                    rein <span className="text-rose-600 dark:text-silver">skywalker.</span>
                </h1>
            </Link>

            <div className="md:hidden flex items-center">
                <BsFillMoonStarsFill
                    onClick={toggleDarkMode}
                    className="cursor-pointer text-2xl dark:text-gray-200 mr-4"
                />
                <button onClick={toggleMenu} className="focus:outline-none text-2xl">
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <ul className="hidden md:flex items-center space-x-8">
                <li
                    className={`hover:text-rose-600 cursor-pointer ${router.pathname === '/' ? 'text-rose-600 font-bold dark:text-rose-400' : 'dark:text-gray-300'}`}>
                    <Link href="/" passHref>Home</Link>
                </li>
                <li
                    className={`hover:text-rose-600 cursor-pointer ${router.pathname === '/portfolio' ? 'text-rose-600 dark:text-rose-400' : 'dark:text-gray-300'}`}>
                    <Link href="/portfolio" passHref>Portfolio</Link>
                </li>
                <li
                    className={`hover:text-rose-600 cursor-pointer ${router.pathname === '/resume' ? 'text-rose-600 dark:text-rose-400' : 'dark:text-gray-300'}`}>
                    <Link href="/resume" passHref>Resume</Link>
                </li>
                <li>
                    <BsFillMoonStarsFill
                        onClick={toggleDarkMode}
                        className="cursor-pointer text-2xl dark:text-gray-200"
                    />
                </li>
            </ul>

            {isMenuOpen && (
                <ul className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 text-center space-y-4 p-4 shadow-lg z-40">
                    <li
                        className={`hover:text-rose-600 cursor-pointer ${router.pathname === '/' ? 'text-rose-600 font-bold dark:text-rose-400' : 'dark:text-gray-300'}`}>
                        <Link href="/" passHref onClick={toggleMenu}>Home</Link>
                    </li>
                    <li
                        className={`hover:text-rose-600 cursor-pointer ${router.pathname === '/portfolio' ? 'text-rose-600 dark:text-rose-400' : 'dark:text-gray-300'}`}>
                        <Link href="/portfolio" passHref onClick={toggleMenu}>Portfolio</Link>
                    </li>
                    <li
                        className={`hover:text-rose-600 cursor-pointer ${router.pathname === '/resume' ? 'text-rose-600 dark:text-rose-400' : 'dark:text-gray-300'}`}>
                        <Link href="/resume" passHref onClick={toggleMenu}>Resume</Link>
                    </li>

                </ul>
            )}
        </nav>
    );
}
