import React from 'react';


const Post = ({ title, body }) => {
    
    return (
        <div class="flex flex-column" className='tr'>
            {/*profile picture(if needed), name, and Group name */}
            <div className='tC bg-black-05 dib br3 pa3 ma3 shadow-5'>
                <p>
                    Profile information
                </p>
            </div>

            
            <div className='tr w-60 bg-black-05 dib br4 pa2 ma4 shadow-5 ' >
                <h3 className='tl' class="flex">{title}</h3>
                <p>
                   {body}
                </p>
            
            </div>
        </div>
    );
}

export default Post;