import React from 'react'
import "./Project.css"
// import ImageSlider from '../ImageSlider/ImageSlider';

const Project = ({title,desc,link,git}) => {
  

  return (
      <div className='project'>
          <div className='projectDescription'>
              <div className='titledesc'>
                  <h2 className={title}>{title}</h2>
                  <p>{desc}</p>
              </div>
              <div className='links'>
                <a href={link} target='blank'>Project View</a>
               
                <a href={git} target='blank'>GitHub</a>
              </div>
          </div>
      </div>
  )
}

export default Project
