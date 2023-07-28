import "../index.css";
import CategoryList from "../components/Categorylist"
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const HomePage=()=>{
    return(
        <>
        <Header/>
        <Navbar/>
        <CategoryList/>
        </>
    )
}
export default HomePage;