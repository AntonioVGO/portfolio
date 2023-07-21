
import React from 'react'

interface InputProps {
    text?: string,
    type?: "text" | "password" | "email",
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    }


export const Input: React.FC<InputProps> = ({text, type="text", value, onChange}) => {

    return (
        <>
            <label className="text-white text-sm text-left">{text}</label>
            <input type={type} value={value} onChange={onChange} className="py-1 px-4 bg-white text-black border border-neutral-400 rounded text-xs w-64 mb-3"></input>
        </>
        
    )
}