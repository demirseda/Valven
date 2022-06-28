import React, { useState } from 'react';
import '../assets/styles/Roles.css'
import RolesData from './RolesData.js'

export default function Roles() {
    const [currentTab, setCurrentTab] = useState('0');
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }
  return (
    <section className='roles_wrapper'>
        <div className='tabs_wrapper'>
            <h3>More Value-Add For Key Roles</h3>
            <div className='tabs'>
                {RolesData.map((data,index) => {
                    return(
                        <span key={index} className='tab_link' id={data.id} disabled={currentTab === `${data.id}`} onClick={(handleTabClick)}> <span class="tabs_line">//</span> {data.title} </span>
                    )
                })}
            </div>
        </div>
        {RolesData.map((data,index) =>{
            return (
                <div className='content animate__animated animate__fadeInRight'>
                
                    <div key={index} className='content_left_wrapper'>
                        {currentTab === `${data.id}` && <div>
                            <img src={data.rolesImage} className={`image_element element_${data.title}`}></img>
                            <img src={data.smallImage} className={`image_element element_${data.title}`}></img>

                            </div>}
                    </div>
                    <div key={index} className="content_right_wrapper">
                        {currentTab === `${data.id}` && <div>
                           <img src={data.icon}></img>
                           <h4>{data.title}</h4>
                           <p>{data.content1}</p>
                           <p>{data.content2}</p>

                        </div>}
                    </div>
              
                </div>
            )
        })}
      
    </section>
  )
}
