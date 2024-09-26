import Head from 'next/head';
import { useDarkMode } from '../../hooks/darkMode';
import Navbar from '@component/navbar';
import Footer from '@component/footer';
import offset from '@/data/offset';
import { pokeDetail, pokeIndex } from '@/data/endpoint';

// Static Site Generation (SSG)
export async function getStaticProps() {
    try {
        // fungsi getStaticProps dieksekusi pada proses build
        const res = await fetch(pokeIndex(offset.value));
        const data = await res.json();

        // fetch setiap data pokemon name, image, dan id
        const promises = data.results.map(async (pokemon) => {
            const detailsRes = await fetch(pokemon.url);
            const detailsData = await detailsRes.json();
            return { name: pokemon.name, image: detailsData.sprites.front_default, id: detailsData.id };
        });

        const pokemonsWithImages = await Promise.all(promises);

        // balikin data sebagai props
        return {
            props: {
                pokemons: pokemonsWithImages,
            }
        };
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        return {
            props: {
                pokemons: [],
            }
        };
    }
}

export default function Home({ pokemons }) {
    const [darkMode, toggleDarkMode] = useDarkMode();

    return (
        <div className={darkMode ? 'dark' : ''}>
            <Head>
                <title>Reynaldi Lusikooy</title>
                <meta name="description" content="A bit of myself." />
                <link rel="icon" href="/image/avatar.ico" />
            </Head>

            <main className="bg-silver dark:bg-gray-900">
                <section className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-[20%]">
                    <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

                    <div className="max-w-4xl mx-auto mt-10">
                        <h2 className="text-3xl text-gray-700 dark:text-gray-300 text-center mb-6">
                            [SSG] Pokémon List
                        </h2>

                        {pokemons.length === 0 ? (
                            <p className="text-center text-red-500 dark:text-red-400">No data available</p>
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
                                            <td className="border px-4 py-2 text-center">{pokemon.id}</td>
                                            <td className="border px-4 py-2 text-center capitalize">{pokemon.name}</td>
                                            <td className="border px-4 py-2 text-center">
                                                <img src={pokemon.image} alt={pokemon.name} className="w-16 h-16 mx-auto" />
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                <a href={pokeDetail(pokemon.id)} target="_blank" rel="noopener noreferrer">View Details</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
