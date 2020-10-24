import React from 'react';
import Group from './Group';
import { groups } from '../dummyGroups';

const GroupList = () => {
    const groupComponent = groups.map((user, i) => {
        return (
            <Group
                id={groups[i]._id}
                description={groups[0].about}
            />
        );
    });


    return (
        <div>
            { groupComponent }
        </div>
    )
}


export default GroupList;