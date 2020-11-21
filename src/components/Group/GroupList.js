import React from 'react';
import Group from './Group';
//import { groups } from '../dummyGroups';

const GroupList = ({ groups }) => {
    const groupComponent = groups.map((user, i) => {
        return (
                <Group
                    id={groups[i].name}
                    description={groups[i].description}
                />          
        );
    });


    return (
        <div className='' style={{ overflowX: 'scroll', height: '400px'}}>
            { groupComponent}
        </div>
    )
}


export default GroupList;