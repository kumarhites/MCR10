import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import { v4 as uuidv4 } from "uuid";

const AddANewProduct = () => {
    const { addNewData } = useData();
    const [selectedDepartment, setSelectedDepartment] =
        useState("Select Department");
    const [newProductData, setNewProductData] = useState({
        id: uuidv4(),
        department: "",
        name: "",
        description: "",
        price: 0,
        stock: 0,
        sku: "",
        supplier: "",
        delivered: 0,
        imageUrl: "",
    });

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (
            !selectedDepartment ||
            !newProductData.name ||
            !newProductData.description ||
            !newProductData.price ||
            !newProductData.stock ||
            !newProductData.sku ||
            !newProductData.supplier ||
            !newProductData.delivered ||
            !newProductData.imageUrl
        ) {
            return;
        }

        const newProduct = {
            ...newProductData,
            id: uuidv4(),
            department: selectedDepartment,
        };

        addNewData(newProduct);

        setNewProductData({
            id: uuidv4(),
            department: "",
            name: "",
            description: "",
            price: 0,
            stock: 0,
            sku: "",
            supplier: "",
            delivered: 0,
            imageUrl: "",
        });
    };

    const [departmentError, setDepartmentError] = useState(null);

    useEffect(() => {
        if (selectedDepartment === "Select Department") {
            setDepartmentError("Select a valid department!");
        } else {
            setDepartmentError(null);
        }
    }, [selectedDepartment]);

    return (
        <div>
            <form className="p-12" onSubmit={handleAddProduct}>
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Add a new Product
                </h1>
                <div className="flex flex-col mt-5">
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900">
                        Department <span className="text-red-700">*</span>
                    </h1>
                    <select
                        id="department"
                        name="department"
                        value={selectedDepartment}
                        onChange={handleDepartmentChange}
                        className="mb-2 text-xl font-bold tracking-tight text-gray-700 rounded p-2 border"
                    >
                        <option value="Select Department">
                            Select Department
                        </option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Toys">Toys</option>
                    </select>
                    {departmentError && (
                        <p className="text-red-700">{departmentError}</p>
                    )}
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Name <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={newProductData.name}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Description <span className="text-red-700">*</span>
                    </h1>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        value={newProductData.description}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Price <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={newProductData.price}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Stock <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={newProductData.stock}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        SKU <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="text"
                        id="sku"
                        name="sku"
                        value={newProductData.sku}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Supplier <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="text"
                        id="supplier"
                        name="supplier"
                        value={newProductData.supplier}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Delivered <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="number"
                        id="delivered"
                        name="delivered"
                        value={newProductData.delivered}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Image URL <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={newProductData.imageUrl}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-5 py-3 mt-5 rounded"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddANewProduct;
