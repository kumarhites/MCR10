import React from "react";
import { useData } from "../context/DataContext";

const Dashboard = () => {
    const { totalStock, totalDelivered, totalLowStockItems } = useData();

    return (
        <div className="flex gap-5 justify-center mt-16">
            {/* card1 */}
            <div
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
            >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-500 text-center">
                    {totalStock}
                </h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Total Stock
                </h5>
            </div>
            {/* card2 */}
            <div
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
            >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-500 text-center">
                    {totalDelivered}
                </h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Total Delivered
                </h5>
            </div>
            {/* card3 */}
            <div
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
            >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-500 text-center">
                    {totalLowStockItems}
                </h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Low Stock Items
                </h5>
            </div>
        </div>
    );
};

export default Dashboard;
