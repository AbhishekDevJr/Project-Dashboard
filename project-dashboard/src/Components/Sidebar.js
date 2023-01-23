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
                    <img src = "icons8-dashboard-layout-48.png" alt = "Dashboard Icon" />
                    <h2>Dashboard</h2>
                </div>

                <div className = "row2">
                    <img src = "icons8-home-page-40.png" alt = "Home Icon" />
                    <a href = "/" target = "_blank">Home</a>
                </div>

                <div className = "row3">
                    <img src = "icons8-user-menu-male-40.png" alt = "Profile Icon" />
                    <a href = "/" target = "_blank">Profile</a>
                </div>

                <div className = "row4">
                    <img src = "icons8-messages-60.png" alt = "Messages Icon" />
                    <a href = "/" target = "_blank">Messages</a>
                </div>

                <div className = "row5">
                    <img src = "icons8-time-machine-40.png" alt = "History Icon" />
                    <a href = "/" target = "_blank">History</a>
                </div>

                <div className = "row6">
                    <img src = "icons8-list-64.png" alt = "Tasks Icon" />
                    <a href = "/" target = "_blank">Tasks</a>
                </div>

                <div className = "row7">
                    <img src = "icons8-people-40.png" alt = "Communities Icon" />
                    <a href = "/" target = "_blank">Communities</a>
                </div>

                <div className = "row8">
                    <img src = "icons8-gear-100.png" alt = "Settings Icon" />
                    <a href = "/" target = "_blank">Settings</a>
                </div>

                <div className = "row9">
                    <img src = "icons8-inquiry-64.png" alt = "Support Icon" />
                    <a href = "/" target = "_blank">Support</a>
                </div>

                <div className = "row10">
                    <img src = "icons8-privacy-64.png" alt = "Privacy Icon" />
                    <a href = "/" target = "_blank">Privacy</a>
                </div>
            </div>
        );
    }
}

export default Sidebar;