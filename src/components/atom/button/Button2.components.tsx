
interface ButtonProps {
    text?: string,
    variant?: 'filled' | 'outlined',
    children?: string,
    onClick?: () => void,
}

export const Button2: React.FC<ButtonProps> = ({ onClick, text, variant = 'filled', children}) => {
    
    let style = 'py-2 px-4 rounded font-semibold transition duration-150 ease-in-out active:bg-sky-800'
  
    if(variant === 'filled'){
        style = `${style} bg-sky-500 hover:bg-sky-600 text-white`
    } else {
        style = `${style} bg-transparent hover:bg-sky-600 text-sky-500 border border-sky-500 hover:border-transparent hover:text-white`
    }

    return (
    <button className={style} onClick={onClick}>{text || children}</button>
  )
}