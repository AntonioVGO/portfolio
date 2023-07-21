
export const Error404 = () => {
    return (
        <>
            <div className="flex flex-col w-screen h-screen justify-center items-center text-white bg-gray-800">
                <p className="text-9xl font-bold">404</p>
                <p className="text-xl font-bold">Not Found</p>
                <p className=''>The resource requested could not be found on this server</p>
            </div>
        </>
    )
}
