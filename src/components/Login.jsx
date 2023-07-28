import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import Endpoints from "../api/Endpoints";

const Login = () => {
    const navigate = useNavigate();
    const [requestResponse, setRequestResponse] = useState({
        textMessage: "",
        alertClass: "",
    });
    const initialValues = {
        username: "",
        password: "",
    };
    const onSubmit = (values) => {
        console.log(values);
        axios
            .post(Endpoints.LOGIN_URL, values)
            .then(
                (response) => {
                    console.log(response);
                    setRequestResponse({
                        textMessage: "login successfull",
                        alertClass: "alert alert-success",
                    });
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    navigate("/");
                },
                (error) => {
                    setRequestResponse({
                        textMessage: "Invalid Credentials",
                        alertClass: "alert alert-danger",
                    });
                }
            )
            .catch((error) => console.log(error));
    };

    const validationSchema = Yup.object({
        username: Yup.string()
            .required("Username is required"),
        password: Yup.string()
            .required("password is required")
            .min(6, "password must be 6 characters long"),
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
                        <p
                            className="display-4 text-center"
                            style={{ marginTop: "20px", marginBottom: "30px" }}
                        >
                            Login
                        </p>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                            validateOnMount
                        >
                            {(formik) => {
                                return (
                                    <Form>
                                        <div className="form-group">
                                            <Field
                                                type="text"
                                                name="username"
                                                className={
                                                    formik.touched.username &&
                                                    formik.errors.username
                                                        ? "form-control is-invalid"
                                                        : "form-control"
                                                }
                                                placeholder="Username"
                                            />
                                            <ErrorMessage name="username">
                                                {(errorMessage) => (
                                                    <small className="text-danger">
                                                        {errorMessage}
                                                    </small>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                        <div className="form-group">
                                            <Field
                                                type="password"
                                                name="password"
                                                className={
                                                    formik.touched.password &&
                                                    formik.errors.password
                                                        ? "form-control is-invalid"
                                                        : "form-control"
                                                }
                                                placeholder="Password"
                                            />
                                            <ErrorMessage name="password">
                                                {(errorMessage) => (
                                                    <small className="text-danger">
                                                        {errorMessage}
                                                    </small>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                        <p className="text-center">
                                            Don't have an account? Sign up{" "}
                                            <Link to="/register"> here </Link>
                                        </p>
                                        <input
                                            type="submit"
                                            value="Login"
                                            className="btn btn-primary btn-block"
                                            disabled={!formik.isValid}
                                        ></input>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};
export default Login;
