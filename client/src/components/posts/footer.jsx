import {Navbar, NavbarText} from 'reactstrap';
import React from 'react'
import "./style.css"
function Footer() {
    return (
    <Navbar
    color="dark"
    container="md"
    dark
    expand
    fixed="bottom"
  >
      <NavbarText>
        TODO List done by TEAM # 2 
      </NavbarText>
      <NavbarText style={{color:"black"}}className= "link">
      © Copyright 2021
      </NavbarText>
  </Navbar>
    )
}

export default Footer;