import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import Group from '../components/Group';
import GroupList from '../components/GroupList';
//import './App.css';

class GroupBox extends Component {
    constructor() {
        super();
        this.state = {
            groups: [],
            searchfield: ''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') //place holder for now
            .then(response => response.json())
            .then(users => this.setState({ groups: users }));

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        return (
            <div className='GroupBox'>
                <div className='flex'>
                    <div className='flex flex-column'>
                        <div className='flex justify-start fw1 f3'>
                            Groups
                        </div>
                        <div className='flex justify-start'>
                            <SearchBox />
                        </div>
                    </div>
                </div>

                <div className='TestingArea'>
                        <GroupList />
                </div>
            </div>
        );
    }
}

export default GroupBox;
