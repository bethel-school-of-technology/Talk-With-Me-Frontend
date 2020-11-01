import React from 'react';

const Post = ({ id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w-25'>
            <div>Title {id}</div>
        </div>
    );
}

export default Post;