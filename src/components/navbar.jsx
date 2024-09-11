import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Navbar({ toggleDarkMode }) {
    const router = useRouter();

    return (
        <nav className="py-5 mb-12 flex justify-between items-center text-gray-800 dark:text-gray-200 sticky top-0 bg-silver dark:bg-gray-1000 z-50">
            <h1 className="text-xl font-bold">
                rein <span className="text-rose-600 dark:text-silver">skywalker.</span>
            </h1>
            <ul className="flex items-center space-x-8">
                <li
                    className={`hover:text-rose-600 cursor-pointer ${router.pathname === '/' ? 'text-rose-600 dark:text-rose-400' : 'dark:text-gray-300'
                        }`}
                >
                    <Link href="/" passHref>
                        Home
                    </Link>
                </li>
                <li
                    className={`hover:text-rose-600 cursor-pointer ${router.pathname === '/portfolio' ? 'text-rose-600 dark:text-rose-400' : 'dark:text-gray-300'
                        }`}
                >
                    <Link href="/portfolio" passHref>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <BsFillMoonStarsFill
                        onClick={toggleDarkMode}
                        className="cursor-pointer text-2xl dark:text-gray-200"
                    />
                </li>
            </ul>
        </nav>
    );
}
