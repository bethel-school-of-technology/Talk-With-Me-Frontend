import React from 'react';




export default function Navbar({ onRouteChange }) {

    return (
        <div className="pointer">

            <p className='pa2' onClick={() => onRouteChange('welcome')}>Welcome</p>
            <p className='pa2' onClick={() => onRouteChange('posts')}>Posts</p>
            <p className='pa2' onClick={()=>  onRouteChange('Create Post')}> Create Post </p>
                            
                   

        </div>
    )
}