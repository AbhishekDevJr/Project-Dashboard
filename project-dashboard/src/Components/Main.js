import React from 'react';
import {Component} from 'react';
import ProjectCard from './ProjectCard';

class Main extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let dummyText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur eveniet natus minus molestias impedit, nobis recusandae reiciendis delectus doloremque, totam ullam in aliquam adipisci.';

        let projectDiscription1 = "This project is a React Application. I have built a clone of 'Razor.com' using Tech like HTML5, CSS3, JS, React. Concepts like multiple UI Components, props, JSX, many css concepts like Flexbox and html concepts were covered.";

        let projectDiscription2 = "This is a JavaScript based project. I have built an online Drawing Tool using HTML5, CSS3 and JavaScript. Concepts like DOM Manipulation, Event Handling and Event Listeners along with many CSS Properties like Pseudo State were covered.";
        

        return(
            <div className = "main">
                <main>
                    <div className = "headings">
                        <p>My Projects</p>
                        <p>Announcements</p>
                    </div>

                    <div className = "project-row1">
                        <ProjectCard projectUrl1 = "https://razorbyabhishek.netlify.app/" gitHubUrl1 = "https://github.com/AbhishekDevJr/Razer-Clone-React" pName1 = "Razor WebSite Clone" content1 = {"Razor Clone Discription." + dummyText} projectUrl2 = "https://etch-a-sketch-by-abhishek.netlify.app/" gitHubUrl2 = "https://github.com/AbhishekDevJr/Etch-A-Sketch" pName2 = "Etch-A-Sketch Project" content2 = {"EtchASketchProject discription." + dummyText} content3 = {"Announcement discription." + dummyText}
                        />
                        <ProjectCard projectUrl1 = "https://spacexbyabhishek.netlify.app/" gitHubUrl1 = "https://github.com/AbhishekDevJr/spaceX-Clone" pName1 = "SpaceX Website Clone" content1 = {"SpaceX Clone discription" + dummyText} projectUrl2 = "https://odinformbyabhishek.netlify.app/" gitHubUrl2 = "https://github.com/AbhishekDevJr/TOP-FormProject" pName2 = "Form Validation Project" content2 = {"Top Form discription" + dummyText} content3 = {"Announcement discription" + dummyText}
                        />
                        <ProjectCard projectUrl1 = "https://abhishekdevjr.github.io/TOP-LandingPage/" gitHubUrl1 = "https://github.com/AbhishekDevJr/TOP-LandingPage" pName1 = "Landing Page Project" content1 = {"Top Landing discription" + dummyText} projectUrl2 = "https://nvidiabyabhishek.netlify.app/" gitHubUrl2 = "https://github.com/AbhishekDevJr/nvidiaClone" pName2 = "Nvidia Website Clone" content2 = {"Nvidia Discription" + dummyText} content3 = {"Announcement discription" + dummyText}
                        />
                    </div>
                </main>
            </div>
        );
    }
}

export default Main;