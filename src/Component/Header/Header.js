import React, { useState } from 'react'
import { Link } from 'react-scroll'
import "./Header.css"
import { FaBars, FaTimes } from 'react-icons/fa'


const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const handleLinks = () => {
        setClick(!click);
    }

    if(click) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div className='header'>
<div className="logo"><h1>@siv</h1></div>
            <div className="navbarLeft">
                <div className='menuIcon' onClick={handleClick}>
                    {click ? (<FaTimes size={25} style={{ color: 'white' }} />) : (<FaBars size={25} style={{ color: 'white' }} />)}
                </div>
            </div>
            <ul className={click ? "navbarRight active" : "navbarRight"}>
                <li>
                    <Link onClick={handleLinks} to='about' smooth={true} duration={500} offset={-80}>
                        <button><h3>About Me</h3></button>
                        
                    </Link>
                </li>
                <li>
                    <Link onClick={handleLinks} to='skills' smooth={true} duration={500} offset={-100}>
                        <button><h3>Skills</h3></button>
                    </Link>
                </li>
                <li>
                    <Link onClick={handleLinks} to='projects' smooth={true} duration={500} offset={-80}>
                        <button><h3>Project</h3></button>
                    </Link>
                </li>
                <li>
                    <Link onClick={handleLinks} to='join' smooth={true} duration={500} offset={-70}>
                        <button><h3>Contact</h3></button>
                    </Link>
                </li>

            </ul>

        </div>
    )
}

export default Header;