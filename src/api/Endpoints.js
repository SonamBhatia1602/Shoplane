import Constants from "./constants";

const Endpoints={
    CATEGORY_URL:`${Constants.BASE_URL}products`,
    PRODUCT_BY_CAT_URL:`${Constants.BASE_URL}products/category/`,
    REGISTER_URL:`${Constants.BASE_URL}users`,
    LOGIN_URL:`${Constants.BASE_URL}auth/login`
}
export default Endpoints;