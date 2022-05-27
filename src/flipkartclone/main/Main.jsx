import React from "react";
import Cards from './Cards.jsx';
import './main.css'

const Main = () => {
    return (
        <main>
            <div className="div_class">
                <img src='https://images.unsplash.com/photo-1562145726-b7af0d80010e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdCUyMGFwaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500'
                    alt="image of flipkart" className="img_class" />
            </div>
            <div>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </main>
    );
}

export default Main;