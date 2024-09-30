// Home.js
import { MainTemplate } from '../components/templates/MainTemplate';
import { useDarkMode } from '../hooks/darkMode';
import Head from 'next/head';

export default function Home() {
    const [darkMode, toggleDarkMode] = useDarkMode();

    return (
        <>
            <Head>
                <title>Reynaldi Lusikooy</title>
                <meta name="description" content="A bit of myself." />
                <link rel="icon" href="/image/avatar.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </Head>
            <MainTemplate darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </>
    );
}