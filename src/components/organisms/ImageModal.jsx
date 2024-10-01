import { PortfolioImage } from '@atoms/PortfolioImage';
import { Button } from '@atoms/Button';

const ImageModal = ({ isImageOpen, selectedImage, closeModal }) => {
    if (!isImageOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center" onClick={closeModal}>
            <div className="relative bg-white dark:bg-gray-800 p-4 rounded-lg">
                <Button
                    className="absolute top-2 right-2 text-white bg-gray-900 dark:bg-white dark:text-gray-900 p-2 rounded-full"
                    onClick={closeModal}
                >
                    &times;
                </Button>
                <PortfolioImage
                    src={selectedImage}
                    alt="Larger View"
                    width={1200}
                    height={800}
                    className="rounded-lg"
                    quality={100}
                />
            </div>
        </div>
    );
};

export default ImageModal;