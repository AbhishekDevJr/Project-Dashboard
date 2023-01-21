import React from 'react';
import {Component} from 'react';

class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "header">
                <div className = "header-part1">
                    <div className = "section1">
                        <img src = "icons8-search-50.png" alt = "Search Icon" className = "icons" />
                        <input type = "text" id = "search" name = "search" />
                    </div>
                    <div className = "section2">
                        <img src = "icons8-alarm-48.png" alt = "Notification Icon" className = "icons" />
                        <img src = "icons8-male-user-100.png" alt = "Profile Icon" className = "profile-icon" />
                        <span>Abhishek Choudhari</span>
                    </div>
                </div>

                <div className = "header-part2">
                    <div className = "section3">
                        <img src = "icons8-male-user-100.png" alt = "Profile Icon" />
                        <div className = "section3-part2">
                            <p className = "small-font">Hi there,</p>
                            <p className = "big-font">Abhishek Choudhari (@abhishek)</p>
                        </div>
                    </div>

                    <div className = "section4">
                        <button type = "button">New</button>
                        <button type = "button">Upload</button>
                        <button type = "button">Share</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
