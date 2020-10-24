import React from 'react';

const Group = ({ id, description  }) => {
    return (
        <div className='flex'>
            <div className='outline'>
                <img alt='robots' src={`https://robohash.org/${id}?size=60x60`}/>
            </div>
            <div className='outline w-25'>
                <div>Name: { id }</div>
                <div>Description: { description }</div>
            </div>
        </div>
    );
}

export default Group;