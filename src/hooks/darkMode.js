import { useState, useEffect } from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedDarkMode = localStorage.getItem('darkMode');
            if (storedDarkMode) {
                setDarkMode(JSON.parse(storedDarkMode));
            }
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('darkMode', JSON.stringify(!prevMode));
            }
            return !prevMode;
        });
    };

    return [darkMode, toggleDarkMode];
}