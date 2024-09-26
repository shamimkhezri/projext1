import Hero from "../../img/hero image 1.png";
import Loc from "../../img/vector (1).png";
import Home from "../../img/home.png";
import Price from "../../img/price.png";
import styless from '../main/main.module.css';
function Main(){
    return(
        <>
        <section>
            <div>
                <div className={styless.header}>
                    <div className={styless.left}>
                        <h1 className={styless.title}>Find Your Dream Home</h1>
                        <p className={styless.p}>Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision</p>
                        <button className={styless.btnh}>Sign up</button>
                    </div>
                    <div className={styless.right}>
                        <img  className={styless.imgright} src={Hero}/>
                    </div>
                </div>
                <div className={styless.foot}>
                    <button className={styless.btn1}>Location  <img src={Loc} /></button>
                    <button className={styless.btn2}>Type   <img src={Home}/></button>
                    <button className={styless.btn3}>Price Range  <img src={Price}/></button>
                    <button className={styless.btn4}>Sign up </button>
                </div>
            </div>
        </section>
        </>
    )

}
export default Main