import Navbar from '@organisms/Navbar';
import Footer from '@organisms/Footer';
import ProfileSection from '@organisms/ProfileSection';

const MainTemplate = ({ darkMode, toggleDarkMode }) => (
    <div className={darkMode ? 'dark' : ''}>
        <main className="bg-silver dark:bg-gray-900">
            <section className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-[20%]">
                <Navbar toggleDarkMode={toggleDarkMode} />
                <ProfileSection darkMode={darkMode} />
            </section>
        </main>
        <Footer />
    </div>
);

export default MainTemplate;