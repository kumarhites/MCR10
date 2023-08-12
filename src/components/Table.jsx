import React from "react";
import { NavLink } from "react-router-dom";

const Table = ({ tableData }) => {
    return (
        <div class="relative">
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Stock
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Supplier
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableData?.map((item) => (
                        <tr class="bg-white border-b" key={item.id}>
                            <td>
                                <img
                                    src={item.imageUrl}
                                    alt="image"
                                    className="h-56"
                                />
                            </td>
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                <NavLink to={`/product/${item.id}`} className="text-indigo-600 underline">
                                    {item.name}
                                </NavLink>
                            </th>
                            <td class="px-6 py-4">{item.description}</td>
                            <td class="px-6 py-4">${item.price}</td>
                            <td class="px-6 py-4">{item.stock}</td>
                            <td class="px-6 py-4">{item.supplier}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
