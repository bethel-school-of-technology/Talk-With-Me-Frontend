import React from 'react';
import './CSS/Banner.css';


// Basic Banner

const Banner = ({ title }) => {
    return (
        <div>
            <div className='banner'>{title}</div>
        </div>
    )
}

export default Banner;