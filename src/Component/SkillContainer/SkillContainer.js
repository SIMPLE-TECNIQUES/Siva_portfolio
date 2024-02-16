import React from 'react'
import "./SkillContainer.css"
import { Element } from 'react-scroll'
import { LinearProgress } from '@mui/material'
import Lottie from 'lottie-react'
import animationData from '../../Assets/animation_llbod5un.json'


const Skill = ({ title, value }) => {
  const linearProgressStyle = {
    height: `${5}px`,
    overflow: 'hidden',
  };
    return (
      <div className='skillContainer__skillSet'>
        <h5>{title}</h5>
        <div className={`skillContainer__slider skillContainer__slider${value}`}>
          <LinearProgress variant='determinate' value={value} style={linearProgressStyle}/>
        </div>
      </div>
    );
  };
  
  const SkillContainer = () => {
    return (
      <Element className='skillContainer' id='skills'>
        <div className='skillContainer__image'>
          <Lottie animationData={animationData}/>
        </div>
        <div className='skillContainer__text'>
          <h2>SKILLSET</h2>
          <Skill title="Java" value={80} />
          <Skill title="HTML and CSS" value={80} />
          <Skill title="Java-script" value={80} />
          <Skill title="MongoDb" value={60} />
          <Skill title="Express.js" value={60}/>
          <Skill title="React Js" value={80}/>
          <Skill title="Node.js" value={60}/>
          <Skill title="Problem solving" value={60}/>
         
        </div>
      </Element>
    );
  };
  

export default SkillContainer
