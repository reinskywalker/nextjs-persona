import { useEffect, useState } from 'react';
import MainTemplate from '@/components/templates/MainTemplate';
import { useDarkMode } from '@hooks/darkMode';
import Head from 'next/head';

function Home() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const [darkMode, toggleDarkMode] = useDarkMode();

    if (!isMounted) {
        return null;
    }

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

export default Home;
