import React from 'react';



export default function Navbar({ onRouteChage }) {

    return (
        <div className="pointer">
            <p onClick={() => onRouteChage('welcome')}>Welcome</p>
            <p onClick={() => onRouteChage('posts')}>Posts</p>
        </div>
    )
}