import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FaHeart } from "react-icons/fa";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cart-actions";
import { addToFavorites,removeFromFavorites } from "../redux/actions/favorite-action";
import React, { useState } from 'react';


const Category = (props) => {
    const dispatch=useDispatch()
    const cartItems = useSelector((state) => state.cart.cartItems);
    const favoriteItems = useSelector((state) => state.favorites.favorites);
    const isFavorite = favoriteItems.some((item) => item.id === props.data.id);
    const isItemInCart = cartItems.some((item) => item.id === props.data.id);

    const formatPrice = (price) => {
        return parseFloat(price).toFixed(2);
    };

    const { id, title, price, category, image, rating } = props.data;
    const totalStars = rating.rate >= 0.5 ? 5 : 4;
    const fullStars = Math.floor(rating.rate);
    const hasHalfStar = rating.rate % 1 >= 0.5;

    const addToCartHandler = ()=>{
        dispatch(addToCart(props.data));
    };
    const toggleFavoriteHandler = () => {
        if (isFavorite) {
          dispatch(removeFromFavorites(props.data));
        } else {
          dispatch(addToFavorites(props.data));
        }
      };

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < totalStars; i++) {
            if (i < fullStars) {
                stars.push(
                    <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#FFCD3C" }} />
                );
            } else if (i === fullStars && hasHalfStar) {
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        style={{ color: "#FFCD3C", opacity: 0.5 }}
                    />
                );
            } else {
                stars.push(
                    <FontAwesomeIcon key={i} icon={faStar} style={{ color: "Grey" }} />
                );
            }
        }
        return stars;
    };
    return (
        <div
            className=".grid-container col-sm-3"
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(270px, 10fr))",
                gridGap: "10px",
                padding: "10px",
                marginTop: "-10px",
            }}
        >
            <div className="card">
                <FaHeart
                onClick={toggleFavoriteHandler}
                    style={{
                        color: isFavorite ? "red" : "grey",
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        fontSize: "24px",
                    }}
                />
                <img
                    src={image}
                    className="card-top-image"
                    style={{
                        padding: "25px",
                        width: "(100%)",
                        height: "calc(100%)",
                        objectFit: "contain",
                        marginTop: "-35px",
                    }}
                />
                <div className="card-body">
                    <p
                        className="card-tittle"
                        style={{
                            flexWrap: "nowrap",
                            whiteSpace: "noWrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%",
                            wordBreak: "break-all",
                            marginTop: "-50px",
                        }}
                    >
                        <span>Brand,</span>
                        <span style={{ color: "rgba(0, 0, 0, 0.5)" }}>{title}</span>
                    </p>
                    <div style={{ marginTop: "-10px" }}>
                        {renderStars()}
                        <span>{"  (" + rating.count + ")"}</span>
                    </div>
                    <div
                        className="price"
                        style={{ marginTop: "5px", fontSize: "30px", color: "#48494B" }}
                    >
                        <span
                            style={{
                                fontSize: "22px",
                                color: "rgba(0, 0, 0, 0.5)",
                                padding: "2px",
                            }}
                        >{`\u0024`}</span>
                        <span>{parseInt(price)}</span>
                        <span
                            style={{
                                fontSize: "18px",
                                color: "rgba(0, 0, 0, 0.5)",
                                padding: "2px",
                                marginBottom: "15px",
                            }}
                        >
                            {formatPrice(price).split(".")[1]}
                        </span>
                    </div>
                    <button onClick={addToCartHandler}
                        href="#"
                        className="btn btn-primary btn-block"
                        style={{
                            marginBottom: "20px",
                            marginTop: "10px",
                            fontWeight: "bold",
                            backgroundColor: isItemInCart ? '#367588 ' : null,
                        }}
                    >
                        {isItemInCart ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Category;

// 