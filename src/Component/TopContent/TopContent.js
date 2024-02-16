import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const TopContent = () => {
  
  const [text] = useTypewriter({
    words: ['Full stack  Developer','Content Creator'],
    loop :{},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (

    <div className='topContent'>
        <div className='topContent__container'>
            <h1 style={{fontSize:'40px'}} className="user_name">Shankar Siva</h1>
            <h3 style={{fontSize:'50px'}}>I'm a{' '}
              <span style={{fontSize:'50px',fontWeight:'bold'}}>{text}</span>
              <span style={{color: '#235790'}}><Cursor/></span>
            </h3>
            <a href='https://drive.google.com/file/d/1CvtMDpSX-yduxSMrjQJkwxpGmjOKxJNC/view?usp=drive_link'>
                <button className='topContent__downloadButton'>Download CV</button>
            </a>
            <Link to='projects' smooth={true} duration={500} offset={-80}>
                <button className='topContent__workButton'>Projects</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent
