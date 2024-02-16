import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material'
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material"
import "./Contact.css"
import { FaEnvelope, FaGithub } from 'react-icons/fa'

const Contact = () => {
    return (
        <Element className='contact' id='contact'>
            <h2 style={{color:"white" , margin:"auto"}}>Contact Me</h2>
            <br />
            
            <div className='contact__container'>
                <div className='contact__icons'>
                    <a href='https://mail.google.com/mail/u/0/?tab=rm#inbox'>
                        <IconButton>
                            <FaEnvelope />
                        </IconButton>
                    </a>
                    <a href='https://github.com/SIMPLE-TECNIQUES?tab=repositories'>
                        <IconButton>
                            <FaGithub />
                        </IconButton>
                    </a>
                    <a href='https://www.linkedin.com/in/shankar-ep-75b7b820b'>
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </a>
                    {/* <a href='https://www.facebook.com/umesh.krishna.7315'>
                        <IconButton>
                            <Facebook />
                        </IconButton>
                    </a> */}
                    <a href='https://www.instagram.com/shankar_s_i_v_a?utm_source=qr&igsh=b3VlNW5weDQ5djdw'>
                        <IconButton>
                            <Instagram />
                        </IconButton>
                    </a>
                </div>
                <br></br>
                <h3  style={{color:"white" , margin:"auto"}}>Copy-rights @Siva</h3>
            </div>
        </Element>
    )
}

export default Contact
