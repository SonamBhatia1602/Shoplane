import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarSupportedContent"
                >
                    <div className="Container" style={{ marginTop: "-15px" }}>
                        {/* <div className="row justify-content-md-center"> */}
                        <ul className="navbar-nav w-100 d-flex justify-content-between pl-4 pr-5">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    All <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/products/electronics`}>
                                    Electronics <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/products/jewelery`}>
                                    Jewellery <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/products/men's clothing`}>
                                    Men's Clothing{" "}
                                    {/* <span className="sr-only">(current)</span> */}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/products/women's clothing`}>
                                    Women's Clothing{" "}
                                    {/* <span className="sr-only">(current)</span> */}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr
                style={{
                    marginTop: "5px",
                    marginLeft: "55px",
                    marginRight: "55px",
                    border: "1px solid white",
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                }}
            />
        </>
    );
};
export default Navbar;
