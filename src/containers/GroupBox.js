import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
//import Group from '../components/Group';
import GroupList from '../components/Group/GroupList';
//import './App.css';
import { exportedgroups } from '../dummyGroups';

function GroupBox() {


    const [groups, setGroups] = useState([]);
    const [searchfield, setSearchfield] = useState('');



    useEffect(() => {
        fetch('http://localhost:3000/groups/get_all_groups')
            .then(response => response.json())
            .then(groups => { setGroups(groups.data.groups);
                // console.log('GroupBox');
                // console.log(groups.data.groups)
                // console.log('exportedgroups');
                // console.log(exportedgroups);
            });

        // setGroups(exportedgroups);
        // console.log("local data" + exportedgroups);

        // const getAllGroups = async () => {
        //     let groupData = await fetch('http://localhost:3000/groups/get_all_groups');
        //     let groupList = await groupData.json();
        //     setGroups(groupList.data.groups);
        // }

        // getAllGroups();
    }, []);

    console.log(groups);
    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }
    const filteredGroups = groups.filter(group => {
        // console.log("FilteredGroup");
        // console.log(group);
        return group.name?.includes(searchfield);
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
