import React from 'react';
import {Component} from 'react';
import ProjectCard from './ProjectCard';

class Main extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "main">
                <main>
                    <div className = "headings">
                        <p>My Projects</p>
                        <p>Announcements</p>
                    </div>

                    <div className = "project-row1">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </main>
            </div>
        );
    }
}

export default Main;