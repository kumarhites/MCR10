import React, { useState, useEffect } from "react";
import { useData } from "../context/DataContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { data } = useData();
    const { id } = useParams();
    const [product, setProduct] = useState(null); // Initialize product as null

    useEffect(() => {
        const productDetail = data.find((item) => item.id === Number(id));
        setProduct(productDetail);
    }, [data, id]);

    return (
        <div>
            {product && (
                <div className="pt-12 px-5 py-3">
                    <h1 className="mb-2 text-2xl font-bold">{product.name}</h1>
                    <img
                        src={product.imageUrl}
                        alt="product.name"
                        className="h-96 px-5"
                    />
                    <h1 className="mb-2 text-2xl font-bold tracking-tight">
                        Price:{" "}
                        <span className="text-neutral-800">${product.price}</span>
                    </h1>
                    <h1 className="mb-2 text-2xl font-bold tracking-tight">
                        Stock:{" "}
                        <span className="text-neutral-800">{product.stock}</span>
                    </h1>
                    <h1 className="mb-2 text-2xl font-bold tracking-tight">
                        Supplier:{" "}
                        <span className="text-neutral-800">
                            {product.supplier}
                        </span>
                    </h1>
                    <h1 className="mb-2 text-2xl font-bold tracking-tight">
                        Department:{" "}
                        <span className="text-neutral-800">
                            {product.department}
                        </span>
                    </h1>
                    <h1 className="mb-2 text-2xl font-bold tracking-tight">
                        SKU:{" "}
                        <span className="text-neutral-800">{product.sku}</span>
                    </h1>
                    <h1 className="mb-2 text-2xl font-bold tracking-tight">
                        Delivered:{" "}
                        <span className="text-neutral-800">
                            {product.delivered}
                        </span>
                    </h1>
                    <h1 className="mb-2 text-2xl font-bold tracking-tight">
                        Description:{" "}
                        <span className="text-neutral-800">
                            {product.description}
                        </span>
                    </h1>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
