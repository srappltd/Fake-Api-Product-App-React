import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return <div className="w-full py-4 border-b bg-white flex items-center justify-between md:px-10 px-5">
        <div className="flex gap-5 items-center">
            <Link to={'/'} className="font-bold md:text-xl text-lg">SR Shoping Limited.</Link>
            {/* <Link to={'/add-product'} className="font-medium text-sm border py-1 px-4 border-sky-400 text-sky-500">Add New Product</Link> */}
        </div>
        <div className="flex md:gap-5 gap-3">
            <Link to={'/cart'} className="font-medium text-sm">Cart</Link>
            <Link to={'/login'} className="font-medium md:block hidden text-sm">Login / Register</Link>
            <Link to={'/login'} className="font-medium md:hidden block text-sm">Login <i class="ri-login-box-line"></i></Link>
        </div>
    </div>;
};

export default Navbar;
