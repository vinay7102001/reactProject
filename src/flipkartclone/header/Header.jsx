import React from 'react';
import './head.css'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
    return (
        <>
            <div className='head_div'>
                <img className="div_img" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                    alrt="flipkart img" />
                <div className='search'>
                    <input type="text" className='input_class' placeholder='Search Here' />
                    <SearchIcon />
                </div>
                <ul className='div_ul'>
                    <li>login</li>
                    <li>Become_Seller</li>
                    <li>More<KeyboardArrowDownIcon /> </li>
                    <li>Cart</li>
                </ul>
            </div>
        </>
    )
}

export default Header;