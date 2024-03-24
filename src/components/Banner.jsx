import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="w-full -mt-16">
            <div className="hero w-full">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Welcome To <span
                            className="text-5xl font-bold bg-300% bg-gradient-to-r from-secondary via-blue-500 to-primary text-transparent bg-clip-text animate-gradient"
                        > ByteBlaze
                        </span></h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="flex gap-3 justify-center">

                            <NavLink to="/blogs" href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">Read Blogs</span>
                            </NavLink>

                            <NavLink to="/bookmarks" href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">Bookmarks</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;