import { NavLink } from "react-router-dom";

const EmptyBookmarks = ({ lable, address, massage }) => {
    return (
        <div className="h-72 p-5 flex flex-col justify-end items-center space-y-4">
            <p className="text-2xl font-semibold">{massage}</p> 
            <NavLink to={address}  className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">{lable}</span>
            </NavLink>
        </div>
    );
};

export default EmptyBookmarks;