import { Link} from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import Endpoints from "../api/Endpoints";
import * as Yup from "yup";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router"

const SignUp = () => {
    const navigate = useNavigate();
    const [requestResponse, setRequestResponse] = useState({
        textMessage: "",
        alertClass: "",
    });

    const initialValues = {
        firstname: "",
        lastname: "",
        emailAdress: "",
        password: "",
        confirmPassword: "",
    };
    const onSubmit = (values) => {
        const payload = {
            email: values.emailAdress,
            username: values.emailAdress.split("@")[0],
            password: values.password,
            name: {
                firstname: values.firstname,
                lastname: values.lastname,
            },
            address: {
                city: "kilcoole",
                street: "7835 new road",
                number: 3,
                zipcode: "12926-3874",
                geolocation: {
                    lat: "-37.3159",
                    long: "81.1496",
                },
            },
            phone: "1-570-236-7033",
        };
        console.log(payload);
        axios
            .post(Endpoints.REGISTER_URL, payload)
            .then(
                (response) => {
                    console.log(response);
                    if (response.status === 200) {
                        setRequestResponse({
                            textMessage: "User Registration Successful",
                            alertClass: "alert alert-success",
                        });
                        navigate(`/login`);
                    } else {
                        setRequestResponse({
                            textMessage: "Invalid Credentials",
                            alertClass: "alert alert-danger",
                        });
                    }
                },
                (error) => {
                    setRequestResponse({
                        textMessage: error.response.data.message,
                        alertClass: "alert alert-danger",
                    });
                }
            )
            .catch((error) => console.log(error));
    };

    const validationSchema = Yup.object({
        firstname: Yup.string()
            .required("First Name is required")
            .min(3, "First Name must be 3 character long"),
        lastname: Yup.string().required("Last Name is required"),
        emailAdress: Yup.string()
            .required("Email is required")
            .email("Email must be a valid email address"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be 6 character long"),
        confirmPassword: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref("password")], "Passwords must match"),
    });

    const formik = useFormik({
        initialValues,
        validateOnMount: true,
        onSubmit,
        validationSchema,
    });
    return (
        <div className="container" style={{ maxWidth: "950px" }}>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div
                        className="wrapper"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "30px",
                            border: "1px solid #ccc",
                            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                            padding: "20px",
                            borderRadius: "10px",
                        }}
                    >
                        <div class={requestResponse.alertClass} role="alert">
                            {requestResponse.textMessage}
                        </div>
                        <p
                            className="display-4 text-center"
                            style={{ marginTop: "20px", marginBottom: "30px" }}
                        >
                            Sign Up
                        </p>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="firstname"
                                    className={
                                        formik.touched.firstname &&
                                        formik.errors.firstname
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    placeholder="First Name"
                                    value={formik.values.firstname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.firstname && formik.errors.firstname ? (
                                    <small className="text-danger">
                                        {formik.errors.firstname}
                                    </small>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastname"
                                    className={
                                        formik.touched.lastname && formik.errors.lastname
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    value={formik.values.lastname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.lastname && formik.errors.lastname ? (
                                    <small className="text-danger">
                                        {formik.errors.lastname}
                                    </small>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="emailAdress"
                                    className={
                                        formik.touched.emailAdress &&
                                        formik.errors.emailAdress
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    placeholder="Email"
                                    value={formik.values.emailAdress}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.emailAdress &&
                                formik.errors.emailAdress ? (
                                    <small className="text-danger">
                                        {formik.errors.emailAdress}
                                    </small>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    className={
                                        formik.touched.password && formik.errors.password
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    placeholder="Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <small className="text-danger">
                                        {formik.errors.password}
                                    </small>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className={
                                        formik.touched.confirmPassword &&
                                        formik.errors.confirmPassword
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    placeholder="Confirm Password"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.confirmPassword &&
                                formik.errors.confirmPassword ? (
                                    <small className="text-danger">
                                        {formik.errors.confirmPassword}
                                    </small>
                                ) : null}
                            </div>
                            <p className="text-center">
                                Already have an account? Login{" "}
                                <Link to="/login"> here </Link>
                            </p>
                            <input
                                type="submit"
                                value="Sign Up"
                                className="btn btn-primary btn-block"
                                disabled={!formik.isValid}
                            />
                        </form>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};
export default SignUp;
