import React from 'react';



export default function Navbar({ onRouteChage }) {

    return (
        <div className="pointer">
            <p className='pa2' onClick={() => onRouteChage('welcome')}>Welcome</p>
            <p className='pa2' onClick={() => onRouteChage('posts')}>Posts</p>
        </div>
    )
}