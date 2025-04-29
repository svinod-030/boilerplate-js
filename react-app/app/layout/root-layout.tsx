import React from 'react';
import {NavLink, Outlet} from "react-router";
import type {Route} from "../../.react-router/types/app/pages/home/+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "React" },
        { name: "description", content: "React" },
    ];
}

const RootLayout = () => {
    return (
        <div>
            <div className="navbar flex items-center justify-between p-4 bg-gray-800 text-white">
                <h1>React App</h1>
                <NavLink to={"/"} className="text-white hover:text-gray-300">Home</NavLink>
                <NavLink to={"/docs"} className="text-white hover:text-gray-300">Docs</NavLink>
                <NavLink to={"/about"} className="text-white hover:text-gray-300">About</NavLink>
            </div>
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;
