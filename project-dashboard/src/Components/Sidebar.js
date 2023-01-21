import React from 'react';
import {Component} from 'react';

class Sidebar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "sidebar">
                <div className = "row1">
                    <img src = "" alt = "Dashboard Icon" />
                    <h2>Dashboard</h2>
                </div>

                <div className = "row2">
                    <img src = "" alt = "Home Icon" />
                    <a href = "">Home</a>
                </div>

                <div className = "row3">
                    <img src = "" alt = "Profile Icon" />
                    <a href = "">Profile</a>
                </div>

                <div className = "row4">
                    <img src = "" alt = "Messages Icon" />
                    <a href = "">Messages</a>
                </div>

                <div className = "row5">
                    <img src = "" alt = "History Icon" />
                    <a href = "">History</a>
                </div>

                <div className = "row6">
                    <img src = "" alt = "Tasks Icon" />
                    <a href = "">Tasks</a>
                </div>

                <div className = "row7">
                    <img src = "" alt = "Communities Icon" />
                    <a href = "">Communities</a>
                </div>

                <div className = "row8">
                    <img src = "" alt = "Settings Icon" />
                    <a href = "">Settings</a>
                </div>

                <div className = "row9">
                    <img src = "" alt = "Support Icon" />
                    <a href = "">Support</a>
                </div>

                <div className = "row10">
                    <img src = "" alt = "Privacy Icon" />
                    <a href = "">Privacy</a>
                </div>
            </div>
        );
    }
}

export default Sidebar;