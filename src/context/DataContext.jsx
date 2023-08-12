import { createContext, useContext, useState } from "react";
import { inventoryData } from "../data/inventoryData";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(inventoryData);

    const totalStock = data.reduce((total, item) => total + item.stock, 0);
    const totalDelivered = data.reduce(
        (total, item) => total + item.delivered,
        0
    );
    const totalLowStockItems = data.reduce(
        (total, item) => (item.stock <= 10 ? total + 1 : total),
        0
    );

    const addNewData = (productData) => {
        const newData = [...data, productData];
        setData(newData);
    };

    return (
        <DataContext.Provider
            value={{
                data,
                setData,
                totalStock,
                totalDelivered,
                totalLowStockItems,
                addNewData,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
