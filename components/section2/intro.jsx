import hom2 from "../img/luxury_and_rich_home_exterior_side_view.png";
import stylle from "../section2/intro.module.css";
function Intro(){
    return(
        <>
        <section>
            <div className={stylle.backimg} >
                <div>
                    <img className={stylle.img}   src={hom2} />
                </div>
                <div className={stylle.right1} >
                   <h1 className={stylle.text}>We Help You To Find Your Dream Home</h1> 
                   <p className={stylle.p}>From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality</p>
                   <div className={stylle.titr}>
                    <h1 className={stylle.title1}>8k+<br/><span className={stylle.span}>Houses Available</span></h1>
                    <h1 className={stylle.title1}>6k+ <br /><span className={stylle.span}>Houses Sold</span></h1>
                    <h1 className={stylle.title1}>2k+ <br /> <span className={stylle.span}>Trusted Agents</span></h1>
                   </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Intro