import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useDarkMode } from '../../hooks/darkMode';
import Navbar from '@component/navbar';
import Footer from '@component/footer';
import offset from '@/data/offset';
import { pokeIndex, pokeDetail } from '@/data/endpoint';

export async function getServerSideProps() {
    try {
        // ngambil data pokemon dari pokeAPI
        const res = await fetch(pokeIndex(offset.value));
        const data = await res.json();

        // ngambil detail pokemon dari pokeAPI
        const promises = data.results.map(async (pokemon, index) => {
            const detailsRes = await fetch(pokeDetail(index + 1));
            const detailsData = await detailsRes.json();
            return { name: pokemon.name, image: detailsData.sprites.front_default };
        });

        const pokemonsWithImages = await Promise.all(promises);

        // passing data ke component sebagai props
        return {
            props: {
                pokemons: pokemonsWithImages,
            },
        };
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        return {
            props: {
                pokemons: [],
            },
        };
    }
}

export default function Home({ pokemons }) {
    const [darkMode, toggleDarkMode] = useDarkMode();
    const [loading, setLoading] = useState(true);

    // simulasi loading ketika pertama kali di render
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <Head>
                <title>Reynaldi Lusikooy</title>
                <meta name="description" content="A bit of myself." />
                <link rel="icon" href="/image/avatar.ico" />
            </Head>

            <main className="bg-silver dark:bg-gray-900">
                {loading ? (
                    <div className="flex items-center justify-center h-screen">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-500"></div>
                        <p className="text-2xl text-gray-700 dark:text-gray-300 ml-4">Loading...</p>
                    </div>
                ) : (
                    <section className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-[20%]">
                        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

                        {/* Tabel Pokémon */}
                        <div className="max-w-4xl mx-auto mt-10">
                            <h2 className="text-3xl text-gray-700 dark:text-gray-300 text-center mb-6">
                                [SSR] Pokémon List
                            </h2>
                            {pokemons.length === 0 ? (
                                <p className="text-center text-gray-700 dark:text-gray-300">No data available</p>
                            ) : (
                                <table className="table-auto w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                            <th className="px-4 py-2">#</th>
                                            <th className="px-4 py-2">Name</th>
                                            <th className="px-4 py-2">Image</th>
                                            <th className="px-4 py-2">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pokemons.map((pokemon, index) => (
                                            <tr key={index} className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300">
                                                <td className="border px-4 py-2 text-center">{index + 1}</td>
                                                <td className="border px-4 py-2 text-center capitalize">{pokemon.name}</td>
                                                <td className="border px-4 py-2 text-center">
                                                    <img src={pokemon.image} alt={pokemon.name} className="w-16 h-16 mx-auto" />
                                                </td>
                                                <td className="border px-4 py-2 text-center">
                                                    <a href={pokeDetail(index + 1)} target="_blank" rel="noopener noreferrer">View Details</a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
}
