import React from 'react';
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import "./ProjectContainer.css";
// import Revive1 from "../../Assets/pictures/Revive1.png";
// import Revive2 from "../../Assets/pictures/Revive2.png";
// import Revive3 from "../../Assets/pictures/Revive3.png";
// import Todo1 from "../../Assets/pictures/Todo1.png";
// import Todo2 from "../../Assets/pictures/Todo2.png";
// import Todo3 from "../../Assets/pictures/Todo3.png";
// import Todo4 from "../../Assets/pictures/Todo4.png";

const ProjectContainer = () => {
    const projects=[
        {
            title: "Authentication_user_profile",
            desc: "This project focus on user password authentication and updated profiles for users",
            link: "https://client-gilt-nu.vercel.app",
            Git: "https://github.com/SIMPLE-TECNIQUES/client",
            // slide: [Revive1, Revive2, Revive3]
        },
        {
            title: "Event_registrtion",
            desc: "Website focuses on the registration of different event conducted by the college institution",
            link: "https://progeni.netlify.app/",
            Git: "https://github.com/orgs/CSE-WebSites/teams/progeny_site/repositories",
            // slide: [Todo1, Todo2, Todo3, Todo4]
        }
    ];

    return (
        <Element className='projectContainer' id='projects'>
            <h1>Projects</h1>
            <div className='projectContainer__projects'>
                {projects.map((project, index) => (
                    <Project 
                    key={index} 
                    title={project.title} 
                    git={project.Git}
                     desc={project.desc} 
                     link={project.link} 
                    //  slide={project.slide} 
                    

                     />
                ))}

            </div>
        </Element>
    );
};

export default ProjectContainer;
