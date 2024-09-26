import sttyle from "../section3/sec3.module.css";
import { useEffect, useState } from "react"; 
import axios from "axios";
import ProductsCard from "../ProductsCard";
function Sec3() {

 const [products, setProducts] = useState([]);
     
   async function getProducts() {
        try {
            const response = await axios.get("http://localhost:7000/place");
            const data = response.data;
            console.log(data);
            setProducts(data); 
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <>
            <div>
                {products.map((item) => (
                    <ProductsCard key={item.id} {...item} />
                ))}
            </div>
            <div className={sttyle.container}>
                <div className={sttyle.title2}>
                    <h1 className={sttyle.text2}>Why Choose Us</h1>
                    <p className={sttyle.titr}> Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service</p>
                </div>
            </div>
        </>
    );
}
export default Sec3;
