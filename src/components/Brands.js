import React, { Component } from 'react'
import BrandsData from './BrandsData.js'
import '../assets/styles/Brands.css'
export default class Brands extends Component {
  render() {
    return (
      <div className='brands_wrapper'>
        <h3>Trusted by visionary companies</h3>
        <div className='brands_images_wrapper'>
            {BrandsData.map((data,index) => {
                return (
                    <div><img src={data.brandImage}></img></div>
                );
            })}
        </div>
      </div>
    )
  }
}
