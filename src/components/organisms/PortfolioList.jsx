import { FixedSizeList as List } from 'react-window';
import { PortfolioItem } from '../molecules/PortfolioItem';

const PortfolioList = ({ portfolio, openImageModal }) => {
    const Row = ({ index, style }) => {
        const item = portfolio[index];
        if (!item) return null;

        return (
            <div style={style}>
                <PortfolioItem item={item} openImageModal={openImageModal} />
            </div>
        );
    };

    return (
        <List
            height={600}
            itemCount={portfolio.length}
            itemSize={200}
            width="100%"
        >
            {Row}
        </List>
    );
};

export default PortfolioList;