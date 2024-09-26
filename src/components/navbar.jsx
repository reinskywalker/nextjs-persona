import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Navbar({ toggleDarkMode }) {
    const router = useRouter();

    return (
        <nav className="py-5 mb-12 flex justify-between items-center text-gray-800 dark:text-gray-200 sticky top-0 bg-white dark:bg-gray-900 z-50 w-full">

            <Link href="/" passHref> <h1 className="text-xl font-bold">
                ID<span className="text-pink-600 dark:text-silver">Camp</span>
            </h1>
            </Link>
            <ul className="flex items-center space-x-8">
                <li
                    className={`hover:text-rose-600 cursor-pointer ${router.pathname === '/sample/csr' ? 'text-rose-600 text-bold dark:text-rose-400' : 'dark:text-gray-300'
                        }`}>
                    <Link href="/sample/csr" passHref>
                        CSR
                    </Link>
                </li>
                <li
                    className={`hover:text-rose-600 cursor-pointer ${router.pathname === '/sample/ssr' ? 'text-rose-600 dark:text-rose-400' : 'dark:text-gray-300'
                        }`}>
                    <Link href="/sample/ssr" passHref>
                        SSR
                    </Link>
                </li>
                <li
                    className={`hover:text-rose-600 cursor-pointer ${router.pathname === '/sample/ssg' ? 'text-rose-600 dark:text-rose-400' : 'dark:text-gray-300'
                        }`}>
                    <Link href="/sample/ssg" passHref>
                        SSG
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
