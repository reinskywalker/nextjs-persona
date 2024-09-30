// ProfileSection.js
import Image from 'next/image';
import { Title } from '../atoms/Title';
import { Subtitle } from '../atoms/Subtitle';
import { SocialMediaIcons } from '../molecules/SocialMediaIcons';
import img_light from '@img/reinskywalker-light.png';
import img_dark from '@img/reinskywalker-dark.png';

export const ProfileSection = ({ darkMode }) => (
    <div className="text-center max-w-3xl mx-auto">
        <Title>Andre <strong>Reynaldi</strong> Lusikooy.</Title>
        <Subtitle>Fullstack Engineer | SDET | DevOps Automation Enthusiast</Subtitle>
        <p className="text-md py-5 leading-8 max-w-xl mx-auto text-center text-gray-700 dark:text-gray-300">
            Specializing in Arduino, drone projects, and DevOps automation management.
        </p>
        <SocialMediaIcons />
        <div className="relative absolute inset-0 bg-black rounded-full mx-auto bg-silver bg-gradient-to-b from-gray-300 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 dark:bg-gray-800 dark:from-gray-600">
            <Image 
                src={darkMode ? img_dark : img_light} 
                alt='Reynaldi Lusikooy' 
                fill
                objectFit='cover' 
                quality={50}
            />
        </div>
    </div>
);
