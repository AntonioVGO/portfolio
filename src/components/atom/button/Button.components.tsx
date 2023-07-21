
import React from 'react'

interface ButtonProps {
    type?: "submit" | "reset",
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    text: string,
    }


export const Button: React.FC<ButtonProps> = ({type, onClick, text}) => {

    if (type === "submit") {
        return (
            <>
                <button onClick={onClick} type={type} className="py-2 px-3 bg-cyan-700 text-white border border-cyan-800 rounded text-xs w-30 mr-2">{text}</button>
            </>
        )
    } else {
        return (
            <>
                <button type={type} className="py-1 px-4 text-white border border-cyan-800 rounded text-xs w-30">{text}</button>
            </>
        )
    }
}