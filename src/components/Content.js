import React, { Component } from 'react'
import '../assets/styles/Content.css'
import '../App.css'
import Feature from './Feature'

export default class Content extends Component {
  render() {
    return (
          <div className='page_content'>
            
            <section className='content_wrapper'>
              <div>

                <div className='content_left_wrapper'>
                    <h3 className='animate__animated animate__slideInRight '> Data Prioritized Engineering Assistant</h3>
                    <p className='animate__animated animate__slideInRight'>
                        Advanced insights on software delivery process for your engineering teams and individuals to improve the performance with a better alignment on business decisions. 
                    </p>
                    <a href='#' className='btn btn_outline btn_fill first_join_beta animate__animated animate__zoomIn'>Join Beta Program</a>
                </div>
                <div className='content_right_wrapper'>
                    <img src={'images/valven-hero-isometric.webp'}></img>
                </div>
              </div>
            </section>
            <section className='powerful_interface_wrapper'>
              <h4 className='animate__animated animate__slideInRight '>Powerful Interface, Clear Guidance</h4>
                  <img src={'images/ValvenPerf-Homepage-1-Insights.webp'}></img>
              <div className='powerful_interface_images'>
                  <div className='image_element'><img src={'images/ValvenPerf-Homepage-1-SmallReport1.webp'}></img></div>
                  <div className='image_element'><img src={'images/ValvenPerf-Homepage-1-SmallReport2.webp'}></img></div>
                  <div className='image_element'><img src={'images/ValvenPerf-Homepage-1-SmallReport3.webp'}></img></div>
                  <div className='image_element'><img src={'images/ValvenPerf-Homepage-1-CodeImpact.webp'}></img></div>
              </div>
            </section>
         
            <section className='organized_wrapper'>
              <h3>Well Organized Data, Better Decisions</h3>
              <p>The key points are to collect development data without any manuel process and interpret them in a way that can reflect the mistakes in the past and enable correct decisions in a real time and for future.</p>
              <img src={'images/ValvenPerformance-Flow_1_2x.webp'}></img>
           </section>
           <Feature/>
          </div>
    )
  }
}
