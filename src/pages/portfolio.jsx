import Head from 'next/head';
import Image from 'next/image';
import { FixedSizeList as List } from 'react-window';
import portfolio from '../data/portfolio';
import Navbar from '@organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { useDarkMode } from '@hooks/darkMode';
import { useState } from 'react';

export default function Portfolio() {
    const [darkMode, toggleDarkMode] = useDarkMode();
    const [isImageOpen, setIsImageOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (image) => {
        setSelectedImage(image);
        setIsImageOpen(true);
    };

    const closeModal = () => {
        setIsImageOpen(false);
        setSelectedImage(null);
    };

    const Row = ({ index, style }) => {
        const item = portfolio[index];

        if (!item) return null;

        const truncatedDescription = item.description.length > 100
            ? item.description.slice(0, 100) + '...'
            : item.description;

        return (
            <div style={style} className="p-4 hover:bg-rose-100 dark:hover:bg-gray-800 hover:shadow-lg transition duration-600 flex">
                <div className="w-1/3 pr-6">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={200}
                        quality={50}
                        className="w-full h-auto rounded-lg shadow-md cursor-pointer"
                        onClick={() => openImageModal(item.image)}
                    />
                </div>
                <div className="w-2/3">
                    <h4 className="text-xl font-bold text-gray-600 dark:text-silver mb-2">{item.title}</h4>
                    <p
                        className="text-md text-gray-700 dark:text-gray-300 mb-4 truncate hover:cursor-pointer"
                        title={item.description}
                    >
                        {truncatedDescription}
                    </p>
                    <a href={item.url} className="text-rose-500 hover:text-rose-600 dark:text-silver" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
            </div>
        );
    };

    return (
        <div className={darkMode ? 'dark' : ''}>
            <Head>
                <title>Andre Reynaldi Lusikooy - Portfolio</title>
                <meta name="description" content="Portfolio of Andre Reynaldi Lusikooy" />
                <link rel="icon" href="/image/avatar.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </Head>

            <main className="bg-silver dark:bg-gray-900 min-h-screen">
                <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-[20%]">
                    <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

                    <section id="portfolio" className="relative p-10 max-w-3xl mx-auto">
                        <h3 className="text-3xl py-4 text-gray-400 dark:text-silver">Portfolio</h3>

                        <List
                            height={600}
                            itemCount={portfolio.length}
                            itemSize={200}
                            width="100%"
                        >
                            {Row}
                        </List>
                    </section>
                </section>
            </main>

            <Footer />

            {isImageOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
                    onClick={closeModal}
                >
                    <div className="relative bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <button
                            className="absolute top-2 right-2 text-white bg-gray-900 dark:bg-white dark:text-gray-900 p-2 rounded-full"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <Image
                            src={selectedImage}
                            alt="Larger View"
                            width={1200}
                            height={800}
                            quality={100}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
