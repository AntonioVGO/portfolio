import { useState } from "react";

interface ButtonDarkModeProps {
    children?: any,
}

export const ButtonDarkMode: React.FC<ButtonDarkModeProps> = ({ children }) => {

    let style = 'w-full py-[5px] text-xs bg-gray-500 text-white font-semibold transition duration-150 ease-in-out active:bg-gray-900'

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    };

    return (
        <>
            <button onClick={toggleDarkMode} className={`${style}`}>DARK MODE ON/OFF</button>
               
            <div className={`${darkMode ? "dark" : null}`}>{children}</div>
        </>
    )
}