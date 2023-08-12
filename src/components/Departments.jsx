import React from "react";
import { useData } from "../context/DataContext";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    const { totalStock, totalDelivered, totalLowStockItems } = useData();

    return (
        <div className="flex gap-5 justify-center mt-16">
            {/* card1 */}
            <NavLink
                to="/products/Kitchen"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
            >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Kitchen
                </h5>
            </NavLink>
            {/* card2 */}
            <NavLink
                to="/products/Clothing"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
            >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Clothing
                </h5>
            </NavLink>
            {/* card3 */}
            <NavLink
                to="/products/Toys"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
            >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Toys
                </h5>
            </NavLink>
        </div>
    );
};

export default Dashboard;
