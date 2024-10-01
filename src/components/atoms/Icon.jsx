import { AiFillTwitterCircle, AiFillYoutube, AiFillGithub, AiFillBehanceSquare } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Icon = ({ name, onClick, url, className = 'text-5xl' }) => {
    const icons = {
        twitter: AiFillTwitterCircle,
        youtube: AiFillYoutube,
        github: AiFillGithub,
        behance: AiFillBehanceSquare,
        moon: BsFillMoonStarsFill,
    };

    const IconComponent = icons[name];

    if (!IconComponent) return null;

    return (
        <IconComponent
            onClick={url ? () => window.open(url, '_blank') : onClick}
            className={`cursor-pointer ${className}`}
        />
    );
};

export default Icon;
