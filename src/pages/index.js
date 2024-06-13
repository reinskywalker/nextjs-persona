import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillYoutube, AiFillGithub, AiFillBehanceSquare } from 'react-icons/ai'
import reinskywalker from '@img/avatar.png'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Reynaldi Lusikooy | Portfolio</title>
        <meta name="description" content="A bit of myself." />
        <link rel="icon" href="/avatar.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <main className='bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='text-xl font-bold'>rein<span className='text-rose-500'>skywalker.</span></h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' />
              </li>
              <li>
                <a className='bg-gradient-to-r from-rose-700 to-red-500 hover:from-rose-400 hover:to-red-200 text-white px-4 py-2 rounded-md ml-8'
                  href="https://www.linkedin.com/in/reinskywalker/" target="_blank" rel="noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-rose-500 dark:text-rose-300 font-bold md:text-6xl'>
              Andre <strong>Reynaldi</strong> Lusikooy.
            </h2>
            <h3 className='text-2xl md:text-3xl dark:text-white'>
              Fullstack Engineer | SDET | Test Engineer | DevOps Automation Enthusiast
            </h3>
            <p className='text-md py-5 leading-8 max-w-xl mx-auto dark:text-gray-200'>
              Specializing in Arduino, drone projects, and DevOps automation management.
            </p>
          </div>
          <div className='flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <AiFillTwitterCircle onClick={() => window.open('https://twitter.com/reinskywalker', '_blank')} className='cursor-pointer text-5xl' />
            <AiFillBehanceSquare onClick={() => window.open('https://www.behance.net/reinskywalker', '_blank')} className='cursor-pointer text-5xl' />
            <AiFillYoutube onClick={() => window.open('https://www.youtube.com/channel/UC_MUwevj9Etq95dZtJRPX4Q', '_blank')} className='cursor-pointer text-5xl' />
            <AiFillGithub onClick={() => window.open('https://github.com/reinskywalker', '_blank')} className='cursor-pointer text-5xl' />
          </div>
          <div className='relative mx-auto bg-white bg-gradient-to-b from-rose-300 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 dark:bg-rose-300'>
            <Image src={reinskywalker} alt='Reynaldi Lusikooy' layout='fill' objectFit='cover' />
          </div>
        </section>
      </main>
    </div>
  )
}