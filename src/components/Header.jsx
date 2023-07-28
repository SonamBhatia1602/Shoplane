import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Constants from "../api/constants";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartCount = useSelector((state) => state.cart.numberCart);
    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token) {
            setLoginStatus(false);
        } else {
            setLoginStatus(true);
        }
    }, []);

    // const [cartItemCount, setCartItemCount] = useState(0);

    // useEffect(() => {
    //     setCartItemCount(cartItems.length);
    // }, [cartItems]);

    const onLogoutHandler = () => {
        localStorage.clear();
        setLoginStatus(false);
        navigate("/login");
    };

    // const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <div>
                <br />
            </div>
            <div className="Container">
                <div class="row ">
                    <h1 class="col-auto mr-auto" style={{ marginLeft: "-120px" }}>
                        <span style={{ color: "#35D7FF" }}>SHOP</span>
                        LANE
                    </h1>
                    {loginStatus ? (
                        <div class="col-auto">
                            <button
                                type="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                    color: "black",
                                    width: "190px",
                                    border: "1px solid white",
                                    boxShadow: "0 2px 4px grey",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "5px",
                                    marginRight: "0px",
                                }}
                            >
                                <img
                                    src={`${Constants.TEMPORORY_FACE_URL}`} // Replace with the URL or local path of your temporary face image
                                    alt="Temporary Face Image"
                                    style={{
                                        width: "60px",
                                        height: "50px",
                                        objectFit: "cover",
                                        backgroundColor: "grey",
                                    }} // Adjust width, height, and margin as needed
                                />

                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginLeft: "-40px",
                                    }}
                                >
                                    <span>Logout</span>
                                    <span style={{ marginLeft: "30px" }}>
                                        {" "}
                                        or Favorites
                                    </span>
                                </div>
                                <span className="bi bi-caret-down-fill"></span>
                            </button>
                            <div class="dropdown-menu" style={{ marginRight: "20px" }}>
                                <button class="dropdown-item" onClick={onLogoutHandler}>
                                    Logout
                                </button>
                                <Link class="dropdown-item" to={`/favorite`}>
                                    Favorites
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div class="col-auto">
                            <button
                                class="btn btn-secondary dropdown-toggle bg-white"
                                type="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                    color: "black",
                                    width: "190px",
                                    border: "1px solid white",
                                    boxShadow: "0 2px 4px grey",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "5px",
                                    marginRight: "0px",
                                }}
                            >
                                <img
                                    src={`${Constants.TEMPORORY_FACE_URL}`} // Replace with the URL or local path of your temporary face image
                                    alt="Temporary Face Image"
                                    style={{
                                        width: "60px",
                                        height: "50px",
                                        objectFit: "cover",
                                        marginRight: "8px",
                                    }} // Adjust width, height, and margin as needed
                                />

                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginLeft: "-25px",
                                    }}
                                >
                                    <span>Login</span>
                                    <span style={{ marginLeft: "15px" }}>
                                        {" "}
                                        or Sign up
                                    </span>
                                </div>
                            </button>
                            <div class="dropdown-menu" style={{ marginRight: "20px" }}>
                                <Link class="dropdown-item" to={`/login`}>
                                    Login
                                </Link>
                                <Link class="dropdown-item" to={`/register`}>
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    )}
                    <div className="cart-wrapper" style={{position:"relative"}}>
                    <button
                        style={{
                            backgroundColor: "transparent",
                            border: "none",
                            position: "relative",
                        }}
                    >
                        <Link to={"/cart"} className="cart-link">
                            <img
                                src={`${Constants.CART_URL}`} // Replace with the URL or local path of your cart icon
                                alt="Cart Icon"
                                style={{
                                    marginTop: "10px",
                                    marginLeft: "10px",
                                    width: "50px",
                                    height: "40px",
                                    marginRight: "-70px",
                                }}
                            />
                            {cartCount > 0 && (
                                <span style={{
                                    position:"absolute",top:"-5px",right:"-65px",backgroundColor:"#FFFF",
                                    padding:"2px 5px",borderRadius:"50%",fontSize:"18px",marginLeft:"100px"
                                }}>{cartCount}</span>
                            )}
                        </Link>
                    </button>
                    </div>
                </div>
            </div>
            <hr
                style={{
                    marginTop: "25px",
                    marginLeft: "55px",
                    marginRight: "55px",
                    border: "1px solid white",
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                }}
            />
        </>
    );
};

export default Header;
