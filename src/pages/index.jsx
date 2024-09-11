import Head from 'next/head';
import Image from 'next/image';
import { AiFillTwitterCircle, AiFillYoutube, AiFillGithub, AiFillBehanceSquare } from 'react-icons/ai';
import reinskywalker from '@img/manhwa.png';
import { useDarkMode } from '../hooks/darkMode';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function Home() {
    const [darkMode, toggleDarkMode] = useDarkMode();

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

                    <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

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
                        <AiFillTwitterCircle
                            onClick={() => window.open('https://twitter.com/reinskywalker', '_blank')}
                            className="cursor-pointer text-5xl"
                        />
                        <AiFillBehanceSquare
                            onClick={() => window.open('https://www.behance.net/reinskywalker', '_blank')}
                            className="cursor-pointer text-5xl"
                        />
                        <AiFillYoutube
                            onClick={() => window.open('https://www.youtube.com/channel/UC_MUwevj9Etq95dZtJRPX4Q', '_blank')}
                            className="cursor-pointer text-5xl"
                        />
                        <AiFillGithub
                            onClick={() => window.open('https://github.com/reinskywalker', '_blank')}
                            className="cursor-pointer text-5xl"
                        />
                    </div>

                    <div className="relative mx-auto bg-silver bg-gradient-to-b from-gray-300 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 dark:bg-gray-800 dark:from-gray-600">
                        <Image src={reinskywalker} alt='Reynaldi Lusikooy' layout='fill' objectFit='cover' />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
