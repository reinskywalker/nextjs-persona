import React from 'react';
import Button from '@atoms/Button';
import { FiMenu, FiX } from 'react-icons/fi';

const MenuToggle = ({ isMenuOpen, toggleMenu }) => (
    <Button onClick={toggleMenu} className="text-2xl">
        {isMenuOpen ? <FiX /> : <FiMenu />}
    </Button>
);

export default MenuToggle;