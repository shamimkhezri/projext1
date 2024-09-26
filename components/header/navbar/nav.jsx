import React from 'react';
import Logo from '../../img/logo.png';
import Search from '../../img/search.png';
import Vector from '../../img/Vector.png';
 import styles from './nav.module.css';
function Navbar(){
    return(
      <>
      <section>
            <div className={styles.container}>
                <img className={styles.logo}  src={Logo} />
                    <div className={styles.text}>
                        <h3>Home</h3>
                        <h3>Service</h3>
                        <h3>Agents</h3>
                        <h3>contact</h3>
                </div>

                <img className={styles.Search} src={Search}/>
                <img className={styles.Vector}  src={Vector} />

                <button className={styles.btn}>Sign up</button>
            </div>
        </section>
        </> 
    )
}
export default Navbar