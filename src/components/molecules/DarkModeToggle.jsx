import { BsFillMoonStarsFill } from 'react-icons/bs';

const DarkModeToggle = ({ toggleDarkMode }) => (
    <button onClick={toggleDarkMode} className="cursor-pointer text-2xl dark:text-gray-200">
        <BsFillMoonStarsFill />
    </button>
);

export default DarkModeToggle;
