import React from 'react';
import styles from './LogoComponent.module.css';

const LogoComponent = () => {
    return (
        <div className={`box ${styles.logo}`}>
            <span className={`${styles.logoText}`}>
                Mi Logo
            </span>
        </div>
    );
};

export default LogoComponent;