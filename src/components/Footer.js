import React, { Component } from 'react'
import navbar_data from './NavbarData'
import '../assets/styles/Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer_wrapper'>
        <div className='footer_top_info'>
            <div className='footer_company_info'>
                <img src={'images/valven_logo.png'}></img>
                <p>A product company that offers value with solutions driving for better work patterns</p>
            </div>
            <div className='footer_nav_links'>
                {navbar_data.map((data,index) =>{
                    return(
                        <a href="#">{data.link}</a>
                    );
                })}
            </div>
            <div className='footer_contact'>
                <p>Want to explore our product or consultacy services?</p>
                <a href="#" className='btn btn_outline'>Contact Us</a>
            </div>
        </div>
        <div className='footer_out_info'>
            <div className='social_icons'>
                <p>/ Visit on</p>
                <span>
                    <a><i class='bx bxl-facebook'></i></a>
                    <a><i class='bx bxl-twitter' ></i></a>
                    <a><i class='bx bxl-linkedin' ></i></a>
                </span>
            </div>
            <div className='contract_wrapper'>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms of Service</a>
            </div>
            <div className='copyrights'>
                <p>© 2022 Valven Inc.</p>
            </div>
        </div>
      </div>
    )
  }
}
