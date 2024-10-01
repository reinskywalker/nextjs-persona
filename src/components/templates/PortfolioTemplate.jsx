import Navbar from '@organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { PortfolioList } from '@organisms/PortfolioList';
import { ImageModal } from '@organisms/ImageModal';

const PortfolioTemplate = ({ darkMode, toggleDarkMode, portfolio, openImageModal, isImageOpen, selectedImage, closeModal }) => (
    <div className={darkMode ? 'dark' : ''}>
        <main className="bg-silver dark:bg-gray-900 min-h-screen">
            <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-[20%]">
                <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                <section id="portfolio" className="relative p-10 max-w-3xl mx-auto">
                    <h3 className="text-3xl py-4 text-gray-400 dark:text-silver">Portfolio</h3>
                    <PortfolioList portfolio={portfolio} openImageModal={openImageModal} />
                </section>
            </section>
        </main>
        <Footer />
        <ImageModal isImageOpen={isImageOpen} selectedImage={selectedImage} closeModal={closeModal} />
    </div>
);

export default PortfolioTemplate;