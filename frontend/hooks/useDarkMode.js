import { useState } from 'react';
import useLocalStorage from './useLocalStorage.js';


const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("toggleDarkMode", initialValue);

    return([darkMode, setDarkMode]);
}

export default useDarkMode;