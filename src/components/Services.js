
import React from 'react'

const Services = ({name,description}) => {
  return (
    <div>
        
      <div class="card  blue darken-3 services ">
            <div class="card-content white-text">
              <span class="card-title"><b> {name}</b></span>
              <p>{description}</p>
            </div>
            <div class="card-action white-text blue darken-4 contact-service">
            <h6 class="white-text">Contact us:</h6>
              <h6>Tel:+256 759129000</h6>
              <h6 >Tel:+44 7517447989</h6>
              <h6 >Whatsapp:+256 782 473770</h6>
            </div>
      </div>
    
  
    </div>
  )
}

export default Services
