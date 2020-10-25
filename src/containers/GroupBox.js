import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
//import Group from '../components/Group';
import GroupList from '../components/GroupList';
//import './App.css';

function GroupBox() {

    const [groups, setGroups] = useState([]);
    const [searchfield, setSearchfield] = useState('');


    useEffect(() => {
        fetch('../dummyGroups.js') //place holder for now
            .then(response => response.json())
            .then(users => { setGroups(users) });

    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    return (
        <div className='GroupBox'>
            <div className='flex'>
                <div className='flex flex-column'>
                    <div className='flex justify-start fw1 f3'>
                        Groups
                        </div>
                    <div className='flex justify-start'>
                        <SearchBox searchChange={onSearchChange} />
                    </div>
                </div>
            </div>

            <div className='TestingArea'>
                <GroupList />
            </div>
        </div>
    );

}

export default GroupBox;
