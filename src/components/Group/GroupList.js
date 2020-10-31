import React from 'react';
import Group from './Group';
//import { groups } from '../dummyGroups';

const GroupList = ({ groups }) => {
    const groupComponent = groups.map((user, i) => {
        return (
                <Group
                    id={groups[i]._id}
                    description={groups[0].about}
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