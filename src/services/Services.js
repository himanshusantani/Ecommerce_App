import React from 'react'

import './services.css';
import serviceData from "../assets/data/serviceData"

const Services = () => {
  return (
    <>
    <div className="container fluid mt-4">
        <div className="row">
            {
                serviceData.map((item,index)=>(
                    <div className="col-lg-3" style={{background:`${item.bg}`}} key={index}>
                <div className="services">
                    
                    <div>
                        <h3>{item.icon}{item.title} </h3>
                        <p className='mt-1'>{item.subtitle}</p>
                    </div>
                </div>
            </div>
                ))
            }
            
        </div>
    </div>
    </>
  )
}

export default Services