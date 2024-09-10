import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import works from '../data/works';

export default function Portfolio() {
    const [darkMode, setDarkMode] = useState(false);
    const router = useRouter();

    return (
        <div className={darkMode ? 'dark' : ''}>

            <Head>
                <title>Reynaldi Lusikooy | Portfolio</title>
                <meta name="description" content="Resume of Andre Reynaldi Lusikooy" />
                <link rel="icon" href="/image/avatar.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </Head>

            <main className="bg-white dark:bg-gray-900">
                <section className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-[20%]">

                    <nav className="py-5 mb-12 flex justify-between items-center dark:text-white sticky top-0 bg-white dark:bg-gray-900 z-50">
                        <h1 className="text-xl font-bold">
                            rein<span className="text-rose-500">skywalker.</span>
                        </h1>
                        <ul className="flex items-center space-x-8">
                            <li className={`hover:text-rose-500 cursor-pointer ${router.pathname === '/' ? 'text-rose-500' : ''}`}>
                                <Link href="/" passHref>
                                    Home
                                </Link>
                            </li>
                            <li className={`hover:text-rose-500 cursor-pointer ${router.pathname === '/portfolio' ? 'text-rose-500' : ''}`}>
                                <Link href="/portfolio" passHref>
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
                            </li>
                        </ul>
                    </nav>

                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-5xl py-2 text-rose-500 dark:text-rose-300 font-bold md:text-6xl">
                            Andre <strong>Reynaldi</strong> Lusikooy.
                        </h2>
                        <h3 className="text-2xl md:text-3xl dark:text-white">
                            Fullstack Engineer | SDET | DevOps Automation Enthusiast
                        </h3>
                        <p className="text-md py-5 leading-8 max-w-xl mx-auto text-center dark:text-gray-200">
                            A creative endeavor and analytical individual with a strong ability to perceive situations from a holistic standpoint. With over four years of experience in software development companies and multiple projects.
                        </p>
                    </div>

                    <section id="experience" className="relative p-10 max-w-3xl mx-auto">
                        <h3 className="text-3xl py-4 dark:text-white">Experience</h3>

                        {/* Timeline Line */}
                        <div className="absolute left-4 top-16 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-700"></div>

                        {works.map((work, index) => (
                            <div key={index} className="relative py-6 pl-12">
                                <div className="absolute left-0 top-6 w-3 h-3 bg-rose-500 rounded-full border-2 border-white dark:border-gray-900"></div>

                                <h4 className="text-xl font-bold dark:text-rose-300 mb-2">{work.title}</h4>
                                <p className="text-md font-bold dark:text-gray-300 mb-1">{work.company}</p>
                                <p className="text-md dark:text-gray-300 mb-4">{work.period}</p>
                                <ul className="list-disc list-inside space-y-2 pl-5 dark:text-gray-200">
                                    {work.responsibilities.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>


                </section>
            </main>
        </div>
    );
}
