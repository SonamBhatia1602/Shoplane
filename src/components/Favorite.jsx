// components/Favorite.js

import React from "react";
import { useSelector } from "react-redux";
import Category from "./Category";

const Favorite = () => {
    const favoriteItems = useSelector((state) => state.favorites.favorites);

    return (
        <div className="favorite-container">
            <div className="container">
                    <div className="row">
            {favoriteItems.length > 0 ? (
                        favoriteItems.map((category,index) => (
                        <Category key={index} data={category} />
                        ))
            ) : (
                <div className="text-center" style={{fontSize:"35px"}}>
                <p >Your favorite list is empty.</p>
                </div>
            )}
             </div>
                </div>
        </div>
    );
};

export default Favorite;
