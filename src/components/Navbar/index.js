import React from 'react'
import {NavLink,Nav, Bars,NavMenu,NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
  return (
    <>
     <Nav>
        <NavLink to="/">
            <h1>Logo</h1>
        </NavLink>
        <Bars />
            <NavMenu>
                <NavLink to ="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to ="/services" activeStyle>
                    Services
                </NavLink>
                <NavLink to ="/contact us" activeStyle>
                    Conatact us
                </NavLink>
                <NavLink to ="/sign up" activeStyle>
                    Sign up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>
                    Sign in
                </NavBtnLink>
            </NavBtn>
     </Nav>
    </>
  )
}

export default Navbar