import React from 'react';
import sttyle from './section3/sec3.module.css';

function ProductsCard({ id,image,title,text }) {
    return (
        <>
        <section className={sttyle.card1}>
            <div>
                <img className={sttyle.card1img}  src={image} alt='' />
            </div>
            <div>
                <h1 className={sttyle.card1title}>{title}</h1>
                <p className={sttyle.card1text}>{text}</p>
            </div>
        </section>
        </>
    );
}

export default ProductsCard;
