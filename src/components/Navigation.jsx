import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="flex flex-col h-screen  ml-16 gap-5  pt-16 sticky top-0">
            <NavLink
                to="/"
                className="mb-2 text-2xl font-semibold tracking-tight text-neutral-100"
            >
                Dashboard
            </NavLink>
            <NavLink
                to="/departments"
                className="mb-2 text-2xl font-semibold tracking-tight text-neutral-100"
            >
                Departments
            </NavLink>
            <NavLink
                to="/products/all"
                className="mb-2 text-2xl font-semibold tracking-tight text-neutral-100"
            >
                Products
            </NavLink>
        </div>
    );
};

export default Navigation;
