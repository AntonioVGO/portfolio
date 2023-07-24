
interface TempImgImgProps {
    img1?: string,
    img2?: string,
    img3?: string,
    img4?: string,
}

export const TempImgImg: React.FC<TempImgImgProps> = ({ img1, img2, img3, img4 }) => {

    return (

        <>
            <section className="flex flex-row w-full justify-center items-center">
                <div className="flex justify-center w-6/12">
                    <img className="w-10/12 hidden dark:block" src={img1}></img>
                    <img className="w-10/12 dark:hidden" src={img2}></img>
                </div>

                <div className="flex justify-center w-6/12">
                    <img className="w-4/12 dark:hidden" src={img3}></img>
                    <img className="w-4/12 hidden dark:block" src={img4}></img>
                </div>
            </section>
        </>
    )
}
