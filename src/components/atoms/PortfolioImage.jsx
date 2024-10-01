import Image from 'next/image';

const PortfolioImage = ({ src, alt, width, height, className, onClick }) => (
    <Image 
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        quality={50}
        onClick={onClick}
    />
);

export default PortfolioImage