import React, { Component } from 'react'
import FeatureData from './FeatureData.js'
export default class Feature extends Component {
  render() {
    return (
      <div className='features_wrapper'>
        {FeatureData.map((data, index) => {
            return(
            <section className={`feature_wrapper${index+1}`} key={index}>
                
                <div className='feature_image_wrapper'>
                    <div className='feature_bg_color'></div>
                    <div className='main_image_element'><img src={data.mainImage}></img></div>
                    <div className={`feature_wrapper${index+1}_images`}>
                        {data.images_list.map((obj, key) => {
                            return(
                                <div className='image_element' key={key}><img src={obj}></img></div>
                            );
                        })}
                    </div>
                </div>
                <div className='feature_text'>
                    <span class="feature_solid"></span>
                    <h6>{data.title}</h6>
                    <p>{data.content}</p>
                </div>
            
           </section>
            )
           })}

      </div>
    )
  }
}
