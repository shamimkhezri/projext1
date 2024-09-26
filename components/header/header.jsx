import Nav from "./navbar/nav";
import Main from "./main/main";
import Section2 from "../section2/intro";
import Intro from "../section2/intro";
import Section3 from "../section3/sec3";
import Sec3 from '../section3/sec3'; 
import ProductsCard from "../ProductsCard";

function Header (){
    return(
        <>
        <Nav/>
        <Main/>
        <Intro/>
        <Section3/>
        <Sec3/>
        <ProductsCard/>
        </>
    )
}
export default Header;