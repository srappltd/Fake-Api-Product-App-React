import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return <div className="w-full py-4 border-b bg-white flex items-center justify-between px-10">
        <div className="flex gap-5 items-center">
            <Link to={'/'} className="font-bold text-xl">SR Shoping Limited.</Link>
            <Link to={'/add-product'} className="font-medium text-sm border py-1 px-4 border-sky-400 text-sky-500">Add New Product</Link>
        </div>
        <div className="flex gap-5">
            <Link to={'/cart'} className="font-medium text-sm">Cart</Link>
            <Link to={'/login'} className="font-medium text-sm">Login / Register</Link>
        </div>
    </div>;
};

export default Navbar;
