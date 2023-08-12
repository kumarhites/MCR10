import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import Table from "./Table";
import { useData } from "../context/DataContext";

const Products = () => {
    const { department } = useParams();
    const [selectedDepartment, setSelectedDepartment] = useState(department);
    const [namePriceStock, setNamePriceStock] = useState("name");
    const { data } = useData();
    const [tableData, setTableData] = useState(data);
    const [lowStockItem, setLowStockItem] = useState(false);

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    const handleNamePriceStockChange = (e) => {
        setNamePriceStock(e.target.value);
    };

    const handleCheckboxChange = () => {
        setLowStockItem(!lowStockItem);
    };

    useEffect(() => {
        let filteredAndSortedData = [...data];

        if (selectedDepartment !== "all") {
            filteredAndSortedData = filteredAndSortedData.filter(
                (item) => item.department === selectedDepartment
            );
        }

        if (namePriceStock === "name") {
            filteredAndSortedData.sort((a, b) => a.name.localeCompare(b.name));
        } else if (namePriceStock === "price") {
            filteredAndSortedData.sort((a, b) => a.price - b.price);
        } else if (namePriceStock === "stock") {
            filteredAndSortedData.sort((a, b) => a.stock - b.stock);
        }

        if (lowStockItem) {
            filteredAndSortedData = filteredAndSortedData.filter(
                (item) => item.stock <= 10
            );
        }

        setTableData(filteredAndSortedData);
    }, [selectedDepartment, namePriceStock, lowStockItem, data]);

    return (
        <>
            <div className="p-12 flex justify-between">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Products
                </h1>
                <select
                    id="department"
                    value={selectedDepartment}
                    onChange={(e) => handleDepartmentChange(e)}
                    className="mb-2 text-xl font-bold tracking-tight text-gray-700 rounded p-2 border"
                >
                    <option value="all">All</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Toys">Toys</option>
                </select>
                <label
                    htmlFor="checkbox"
                    className="mb-2 text-xl font-bold tracking-tight text-gray-700 flex items-center gap-2"
                >
                    <input
                        onChange={handleCheckboxChange}
                        checked={lowStockItem}
                        id="checkbox"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    Low stock items.
                </label>
                <select
                    id="namePriceStock"
                    value={namePriceStock}
                    onChange={(e) => handleNamePriceStockChange(e)}
                    className="mb-2 text-xl font-bold tracking-tight text-gray-700 rounded p-2 border"
                >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="stock">Stock</option>
                </select>
                <NavLink
                    to="/add"
                    className="px-4 items-center flex bg-blue-500 text-white mb-2 text-xl rounded font-bold tracking-light"
                >
                    New
                </NavLink>
            </div>
            <Table tableData={tableData} />
        </>
    );
};

export default Products;
