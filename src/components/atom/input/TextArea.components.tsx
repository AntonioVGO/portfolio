import { FC } from "react"

interface TextAreaProps {
    labelText?: string,
    name?: string,
    value?: string,
    error?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}


export const TextArea: FC<TextAreaProps> = ({labelText, value, error = false, onChange, name}) => {
  return (
    <>
        <label className="font-semibold text-black dark:text-white">{labelText}</label>
        <textarea onChange={onChange} name={name} value={value} className={error ? "h-32 rounded p-2 mb-1 border-red-500 border-solid border-2 bg-gray-200 dark:bg-white" : "h-32 bg-gray-200 dark:bg-white rounded p-2 mb-1"} />
    </>
  )
}