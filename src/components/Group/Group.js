import React from 'react';

const Group = ({ id, description }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma 2 grow bw2 shadow-5 w-25'>
            <img alt='robots' src={`https://robohash.org/${id}?size=60x60`} />
            <div>Name: {id}</div>
            <div>Description: {description}</div>
        </div>
    );
}

export default Group;