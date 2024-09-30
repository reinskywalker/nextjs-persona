import { AiFillTwitterCircle, AiFillYoutube, AiFillGithub, AiFillBehanceSquare } from 'react-icons/ai';

export const Icon = ({ name, url }) => {
    const icons = {
        twitter: AiFillTwitterCircle,
        youtube: AiFillYoutube,
        github: AiFillGithub,
        behance: AiFillBehanceSquare,
    };

    const IconComponent = icons[name];

    return (
        <IconComponent 
            onClick={() => window.open(url, '_blank')}
            className="cursor-pointer text-5xl"
        />
    );
};
