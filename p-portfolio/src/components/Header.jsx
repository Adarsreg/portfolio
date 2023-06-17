import pfp from '../images/pfpp.jpg';

const Header = () => {
    return (
        <div className="bg-gray-900">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-center text-4xl md:text-5xl font-bold text-purple-500 tracking-tight mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Hi, I'm Adarsh Sharma
                </h1>
                <p className="text-center text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8">
                    FullStack Developer | OpenSource Enthusiast
                </p>
                <div className="flex justify-center">
                    <div className="rounded-full border-4 border-white overflow-hidden mt-10">
                        <img src={pfp} alt="Avatar" className="object-center h-60 md:h-80" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
