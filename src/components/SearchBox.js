import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa1 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search groups'
                //onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;