import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import './Nav.css'


function Nav() {
    const [show, handleShow] = useState(false)
    const history = useNavigate()

    const transitionNavBar = () =>{
        if (window.screenY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => {
            window.removeEventListener('scroll', transitionNavBar)
        }
    }, [])

    return (

        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <img 
                onClick={() =>  history({ pathname: '/'}) }
                className='nav_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

                <img
                onClick={() => history({ pathname: '/profile'}) }
                 className='nav_avatar' src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />
            </div>
            
            
        </div>
    )
}

export default Nav
