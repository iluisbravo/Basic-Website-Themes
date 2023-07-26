import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/slices/themeSlice";
import './ThemeSwitch.css'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

const ThemeSwitch = ({ isDarkMode }) => {
    const dispatch = useDispatch();

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        // <div className="theme-switcher">
        //   <input
        //     id="theme-switch"
        //     type="checkbox"
        //     checked={isDarkMode === true}
        //     onChange={handleThemeToggle}
        //   />
        //   <label for="theme-switch">Dark Mode</label>
        // </div>
        <>
            <label className="switch">
                <input type="checkbox" id="theme-toggle" checked={isDarkMode === true}  onChange={handleThemeToggle}/>
                <span className="slider round">
                    {/* <img className="moon" src="https://img.icons8.com/emoji/50/000000/crescent-moon-emoji.png" />
                    <img className="sun" src="https://img.icons8.com/emoji/50/000000/sun-emoji.png" /> */}
                </span>
            </label>
        </>
    );
};

export default ThemeSwitch;