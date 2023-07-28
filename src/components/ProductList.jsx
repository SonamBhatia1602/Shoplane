import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";
import Endpoints from "../api/Endpoints";
import { useParams } from "react-router-dom";

const ProductList = () => {
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    const fetchData = () => {
        axios
            .get(Endpoints.PRODUCT_BY_CAT_URL + category)
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className="container">
            <div className="row">
                {products.map((product, index) => (
                    <Category key={index} data={product} />
                ))}
            </div>
        </div>
    );
};
export default ProductList;
