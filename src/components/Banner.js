import React from 'react';
import './CSS/Banner.css';


// Basic Banner

const Banner = ({ title }) => {
    return (
        <div>
            <div className='banner pa6'><span className='mt2 mb0 baskerville i fw1 f1'>{title}</span></div>
        </div>
    )
}

export default Banner;