import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";
import Endpoints from "../api/Endpoints";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    const fetchData = () => {
        axios
            .get(Endpoints.CATEGORY_URL)
            .then((response) => {
                // console.log(response.data);
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="row">
                {categories.map((category, index) => (
                    <Category key={index} data={category} />
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
