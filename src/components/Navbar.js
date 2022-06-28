import React, { Component,useState } from 'react'
import '../assets/styles/Navbar.css'
import NavbarData from './NavbarData.js'
function Navbar() {
    const[navbar, setNavbar] = useState(false);
    const changeBackground = () => {
      if(window.scrollY > 80)
        setNavbar(true);
      else{
        setNavbar(false);
      }
    }
    window.addEventListener('scroll', changeBackground);
    return (
      <section className={navbar ? 'page_header_wrapper active' : 'page_header_wrapper'}>
        <div className='logo_wrapper'>
            <img src={ '/images/valven_logo.png' } ></img>
        </div>
        <div className='navbar_wrapper'>
            <ul>
                {NavbarData.map((data,index) => {
                    return(

                    <li><a href='#'> {data.link} </a></li>
                    );
                })}
            </ul>
            <a href='#' className='btn btn_outline btn_join_beta_program'>Join Beta Program</a>
        </div>
      </section>
    )
  }
export default Navbar;