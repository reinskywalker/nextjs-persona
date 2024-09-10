import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'; 
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillYoutube, AiFillGithub, AiFillBehanceSquare } from 'react-icons/ai';
import reinskywalker from '@img/manhwa.png';
import { useDarkMode } from '../hooks/darkMode'; 

export default function Home() {
  const [darkMode, toggleDarkMode] = useDarkMode(); 
  const router = useRouter(); 

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Reynaldi Lusikooy | Portfolio</title>
        <meta name="description" content="A bit of myself." />
        <link rel="icon" href="/image/avatar.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <main className="bg-silver dark:bg-gray-900">
        <section className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-[20%]">

          <nav className="py-5 mb-12 flex justify-between items-center text-gray-800 dark:text-gray-200 sticky top-0 bg-silver dark:bg-gray-1000 z-50">
            <h1 className="text-xl font-bold">
              rein<span className="text-rose-600 dark:text-silver">skywalker.</span>
            </h1>
            <ul className="flex items-center space-x-8">
              <li className={`hover:text-rose-600 cursor-pointer ${router.pathname === '/' ? 'text-rose-600 dark:text-rose-400' : 'dark:text-gray-300'}`}>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li className={`hover:text-rose-600 cursor-pointer ${router.pathname === '/portfolio' ? 'text-rose-600 dark:text-rose-400' : 'dark:text-gray-300'}`}>
                <Link href="/portfolio" passHref>
                  Portfolio
                </Link>
              </li>
              <li>
                <BsFillMoonStarsFill onClick={toggleDarkMode} className="cursor-pointer text-2xl dark:text-gray-200" />
              </li>
            </ul>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl py-2 text-gray-500 dark:text-silver font-bold md:text-6xl">
              Andre <strong>Reynaldi</strong> Lusikooy.
            </h2>
            <h3 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-400">
              Fullstack Engineer | SDET | DevOps Automation Enthusiast
            </h3>
            <p className="text-md py-5 leading-8 max-w-xl mx-auto text-center text-gray-700 dark:text-gray-300">
              Specializing in Arduino, drone projects, and DevOps automation management.
            </p>
          </div>

          <div className="flex justify-center gap-16 py-3 text-gray-800 dark:text-gray-300">
            <AiFillTwitterCircle onClick={() => window.open('https://twitter.com/reinskywalker', '_blank')} className="cursor-pointer text-5xl" />
            <AiFillBehanceSquare onClick={() => window.open('https://www.behance.net/reinskywalker', '_blank')} className="cursor-pointer text-5xl" />
            <AiFillYoutube onClick={() => window.open('https://www.youtube.com/channel/UC_MUwevj9Etq95dZtJRPX4Q', '_blank')} className="cursor-pointer text-5xl" />
            <AiFillGithub onClick={() => window.open('https://github.com/reinskywalker', '_blank')} className="cursor-pointer text-5xl" />
          </div>

          <div className="relative mx-auto bg-silver bg-gradient-to-b from-gray-300 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 dark:bg-gray-800 dark:from-gray-600">
            <Image src={reinskywalker} alt='Reynaldi Lusikooy' layout='fill' objectFit='cover' />
          </div>
        </section>
      </main>
    </div>
  );
}
