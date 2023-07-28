import "../index.css";
// import CategoryList from "../components/Categorylist"
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const ProductsPage=()=>{
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductList/>
        </>
    )
}
export default ProductsPage;