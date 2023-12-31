import { FC } from "react"

interface InputProps {
    labelText?: string,
    name?: string,
    value?: string,
    type?: "text" | "password" | "email",
    error?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const Input2: FC<InputProps> = ({labelText, value, type = "text", error = false, onChange, name}) => {
  return (
    <>
        <label className="font-semibold text-black dark:text-white">{labelText}</label>
        <input onChange={onChange} name={name} type={type} value={value} className={error ? "rounded p-2 mb-1 border-red-500 border-solid border-2 bg-gray-200 dark:bg-white" : "bg-gray-200 dark:bg-white rounded p-2 mb-1"} />
    </>
  )
}