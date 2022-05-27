import React from 'react';
import "./main.css"

const Card = () => {
    return (
        <>
            <div className='div_card'>
                <img className='image_class' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVwfpoiteyNeU2eaR-xsN38siD1RsowPbjtw&usqp=CAU'
                    alt="phone" />
                <ol className='ul_main'>
                    <li>10% off</li>
                    <li> daily offer</li>
                </ol>
            </div>
        </>
    )
}

export default Card;