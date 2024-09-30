import Head from 'next/head';
import { useRouter } from 'next/router';
import works from '../data/works';
import Navbar from '@/components/NavBar';
import { useDarkMode } from '../hooks/darkMode';
import Footer from '@/components/Footer';

export default function Portfolio() {
    const [darkMode, toggleDarkMode] = useDarkMode();

    return (
        <div className={darkMode ? 'dark' : ''}>
            <Head>
                <title>Reynaldi Lusikooy</title>
                <meta name="description" content="Resume of Andre Reynaldi Lusikooy" />
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
                        <h3 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
                            Fullstack Engineer | SDET | DevOps Automation Enthusiast
                        </h3>
                        <p className="text-md py-5 leading-8 max-w-xl mx-auto text-center text-gray-800 dark:text-gray-400">
                            A creative endeavor and analytical individual with a strong ability to perceive situations from a holistic standpoint.
                            With over four years of experience in software development companies and multiple projects.
                        </p>
                    </div>

                    <section id="experience" className="relative p-10 max-w-3xl mx-auto">
                        <h3 className="text-3xl py-4 text-gray-400 dark:text-silver">Experience</h3>
                        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-700"></div>
                        {works.map((work, index) => (
                            <div
                                key={index}
                                className="relative py-6 pl-10 hover:bg-rose-100 dark:hover:bg-gray-800 hover:shadow-lg transition duration-600"
                            >
                                <div className="absolute left-3 top-8 w-4 h-4 bg-gray-600 rounded-full border-2 border-white dark:border-gray-900"></div>
                                <h4 className="text-xl font-bold text-gray-600 dark:text-silver mb-2">{work.title}</h4>
                                <p className="text-md font-bold text-gray-600 dark:text-gray-300 mb-1">{work.company}</p>
                                <p className="text-md text-gray-700 dark:text-gray-300 mb-4">{work.period}</p>
                                <ul className="list-disc list-inside space-y-2 pl-5 text-gray-700 dark:text-gray-200">
                                    {work.responsibilities.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                        ))}
                    </section>
                </section>
            </main>
            <Footer />
        </div>
    );
}
