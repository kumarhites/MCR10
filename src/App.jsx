import "./App.css";
import Dashboard from "./components/Dashboard";
import Departments from "./components/Departments";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import AddANewProduct from "./components/AddANewProduct";

function App() {
    return (
        <div className="grid grid-cols-6 gap-3">
            <div className="max-w-32 bg-neutral-800  sticky">
                <Navigation />
            </div>
            <div className="col-span-5">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/departments" element={<Departments />} />
                    <Route
                        path="/products/:department"
                        element={<Products />}
                    />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/add" element={<AddANewProduct />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
