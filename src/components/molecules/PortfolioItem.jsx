import { PortfolioImage } from '@atoms/PortfolioImage';

const PortfolioItem = ({ item, openImageModal }) => {
    const truncatedDescription = item.description.length > 100
        ? item.description.slice(0, 100) + '...'
        : item.description;

    return (
        <div className="p-4 hover:bg-rose-100 dark:hover:bg-gray-800 hover:shadow-lg transition duration-600 flex">
            <div className="w-1/3 pr-6">
                <PortfolioImage
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
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

export default PortfolioItem;