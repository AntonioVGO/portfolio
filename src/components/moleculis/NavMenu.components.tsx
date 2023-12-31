import { useNavigate } from "react-router-dom";
import { useState } from "react"; // import state

interface NavMenuProps {
    text1?: string,
    text2?: string,
    text3?: string,
}

export const NavMenu:React.FC<NavMenuProps> = ({ text1, text2, text3}) => {

    const navigate = useNavigate();

    const [hidden, setHidden] = useState(false);

    const toggleHidden = () => {
        setHidden(!hidden)
    };

    return (

        <>
            <button onClick={toggleHidden} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"></path>
                </svg>
            </button>

            <nav className={`${hidden ? "block" : "hidden"} w-full md:block md:w-auto`}>
                <ul className="opacity-95 md:opacity-100 fixed right-9 top-16 md:right-0 md:top-0 md:relative font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-300 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <button onClick={() => navigate("/portfol")} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{text1}</button>
                    </li>
                    <li>
                        <button onClick={() => navigate("/about")} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{text2}</button>
                    </li>
                    <li>
                        <button onClick={() => navigate("/contacto")} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{text3}</button>
                    </li>
                    <li>
                        <button onClick={() => navigate("/login")} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Login</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}