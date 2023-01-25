import React from 'react';
import {Component} from 'react';

class ProjectCard extends Component {
    constructor(props){
        super(props)
    }

    render(){
        // const {backgroundImage} = this.props.styleCard1;
        return(
            <div className = "card-parent">
            <div className = "card" style = {this.props.styleCard1}>
                <strong><p>{this.props.pName1}</p></strong>
                <p>{this.props.content1}</p>
                <div className = "card-links">
                    <a href = {this.props.gitHubUrl1} target = "_blank"><img src = "icons8-github-48.png" alt = "Star Icon"/></a>
                    <a href = {this.props.projectUrl1} target = "_blank"><img src = "icons8-ophthalmology-30.png" alt = "View Icon"/></a>
                </div>
            </div>

            <div className = "card">
            <strong><p>{this.props.pName2}</p></strong>
                <p>{this.props.content2}</p>
                <div className = "card-links">
                    <a href = {this.props.gitHubUrl2} target = "_blank"><img src = "icons8-github-48.png" alt = "Star Icon"/></a>
                    <a href = {this.props.projectUrl2} target = "_blank"><img src = "icons8-ophthalmology-30.png" alt = "View Icon"/></a>
                </div>
            </div>

            <div className = "card">
            <strong><p>Project Name-1</p></strong>
                <p>{this.props.content3}</p>
                <div className = "card-links">
                    <a href = "/"><img src = "icons8-christmas-star-50.png" alt = "Star Icon"/></a>
                    <a href = "/"><img src = "icons8-ophthalmology-30.png" alt = "View Icon"/></a>
                </div>
            </div>
            
            </div>
        );
    }
}

export default ProjectCard;