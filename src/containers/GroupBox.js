import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
//import Group from '../components/Group';
import GroupList from '../components/GroupList';
//import './App.css';
import { exportedgroups } from '../dummyGroups';

function GroupBox() {


    const [groups, setGroups] = useState([]);
    const [searchfield, setSearchfield] = useState('');



    useEffect(() => {
        // fetch('../dummyGroups.json') //place holder for now
        //     .then(response => response.json())
        //     .then(users => { setGroups(users) });

        setGroups(exportedgroups);

    }, []);

    console.log(groups);
    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }
    const filteredGroups = groups.filter(group => {
        return group.about.includes(searchfield);
    });

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
                    <div className='GroupList'>
                        <GroupList groups={filteredGroups} />
                    </div>
                </div>
            </div>

        </div>
    );

}

export default GroupBox;
