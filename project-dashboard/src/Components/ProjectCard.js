import React from 'react';
import {Component} from 'react';

class ProjectCard extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = "card-parent">
            <div className = "card">
                <p>Project Name-1</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ipsam maiores saepe beatae qui, necessitatibus dolores voluptatibus similique illo repellat dicta! Ipsum dicta nulla mollitia.
                </p>
                <div className = "card-links">
                    <a href = "/"><img src = "icons8-christmas-star-50.png" alt = "Star Icon"/></a>
                    <a href = "/"><img src = "icons8-ophthalmology-30.png" alt = "View Icon"/></a>
                </div>
            </div>

            <div className = "card">
                <p>Project Name-1</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ipsam maiores saepe beatae qui, necessitatibus dolores voluptatibus similique illo repellat dicta! Ipsum dicta nulla mollitia.
                </p>
                <div className = "card-links">
                    <a href = "/"><img src = "icons8-christmas-star-50.png" alt = "Star Icon"/></a>
                    <a href = "/"><img src = "icons8-ophthalmology-30.png" alt = "View Icon"/></a>
                </div>
            </div>

            <div className = "card">
                <p>Project Name-1</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ipsam maiores saepe beatae qui, necessitatibus dolores voluptatibus similique illo repellat dicta! Ipsum dicta nulla mollitia.
                </p>
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