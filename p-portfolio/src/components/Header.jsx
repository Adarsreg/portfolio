import pfp from '../images/pfpp.jpg'

const Header = () => {
    return (
        <div className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-center text-4xl md:text-5xl font-bold text-purple-500 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Hi, I'm Adarsh Sharma
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-center text-xl md:text-2xl lg:text-3xl text-white ">
                    FullStack Developer | OpenSource Enthusiast
                </p>
                <div className="text-center my-5">
                    <div className="inline-block rounded-full border-4 border-gray-300 overflow-hidden ">
                        <img src={pfp} alt="Avatar" className="object-center max-h-60 md:max-h-80" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;