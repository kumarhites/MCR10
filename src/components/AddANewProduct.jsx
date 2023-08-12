import React, { useEffect, useState } from "react";

const AddANewProduct = () => {
    const [selectedDepartment, setSelectedDepartment] =
        useState("Select Department");

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
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
            <form className="p-12">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Add a new Product
                </h1>
                <div className="flex flex-col mt-5">
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900">
                        Department <span className="text-red-700">*</span>
                    </h1>
                    <select
                        id="department"
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
                        class="block w-full p-4 pl-10 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Description <span className="text-red-700">*</span>
                    </h1>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        class="block w-full p-4 pl-10 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Price <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        class="block w-full p-4 pl-10 text-sm text-gray-900 rounded border required"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddANewProduct;
