import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ProfileSection } from '../organism/ProfileSection';

export const MainTemplate = ({ darkMode, toggleDarkMode }) => (
    <div className={darkMode ? 'dark' : ''}>
        <main className="bg-silver dark:bg-gray-900">
            <section className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-[20%]">
                <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                <ProfileSection darkMode={darkMode} />
            </section>
        </main>
        <Footer />
    </div>
);
