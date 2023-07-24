import { useState } from "react"; // import state

interface NavFooterProps {
    text?: string,
    text1?: string,
    text2?: string,
    text3?: string,
}

export const NavFooter: React.FC<NavFooterProps> = ({ text, text1, text2, text3 }) => {

    const [hidden, setHidden] = useState(false);

    const toggleHidden = () => {
        setHidden(!hidden)
    };

    return (

        <>
            <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900 md:p-3">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between mx-auto p-4">
                    <div className="flex flex-col justify-center items-center">
                        <span className="self-center text-DM whitespace-nowrap dark:text-white text-xs sm:text-xs  lg:text-base xl:text-lg">{text}</span>

                        <button onClick={toggleHidden} className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400">
                            <svg className="w-3 h-3" fill="none" viewBox="5 0 15 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path>
                            </svg>
                        </button>
                    </div>

                    <div className={`${hidden ? "block" : "hidden"} w-full md:block md:w-auto`}>
                        <ul className="flex flex-row justify-between p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 dark:text-white text-xs sm:text-xs  lg:text-base xl:text-lg">
                            <li><a href="https://www.behance.net/tonovgo" target="_blank">{text1}</a></li>
                            <li><a href="https://www.instagram.com/dago_rk/" target="_blank">{text2}</a></li>
                            <li><a href="https://es.linkedin.com/in/tonovgo" target="_blank">{text3}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}