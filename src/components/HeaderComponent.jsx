import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import { useSelector } from 'react-redux';
import styles from './HeaderComponent.module.css';

const HeaderComponent = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    return (
        <div className={`box ${styles.header}`}>
            <ThemeSwitch isDarkMode={isDarkMode}></ThemeSwitch>
        </div>
    );
};

export default HeaderComponent;