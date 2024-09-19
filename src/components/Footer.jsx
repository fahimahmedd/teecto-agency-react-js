import { Container } from '@mui/material'
import React from 'react'
import logo from "../assets/images/logo.png";


function Footer() {
  return (
    <>
    <div className="footer">
        <Container>  
            <div className="footer-wrapper">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <span>© 2024 <span>TEECTO</span>. All rights reserved</span>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Footer