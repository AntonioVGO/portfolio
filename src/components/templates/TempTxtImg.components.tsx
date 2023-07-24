
interface TempTxtImgProps {
    img?: string,
    text?: string,
}

export const TempTxtImg: React.FC<TempTxtImgProps> = ({ img, text }) => {

    return (

        <>
            <div className="flex flex-row bg-white my-32">
                <div className="bg-gray-200 dark:bg-white flex items-center p-5 w-5/12 text-xs md:text-lg xl:text-2xl">
                    <p>{text}</p>
                </div>
                <div className="w-7/12">
                    <img src={img}></img>
                </div>
            </div>
        </>
    )
}