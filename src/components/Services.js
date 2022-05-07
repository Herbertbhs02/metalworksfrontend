
import React from 'react'

const Services = ({name,description}) => {
  return (
    <div>
        
      <div class="card blue-grey darken-1 services ">
        <div class="card-content white-text">
          <span class="card-title"><b> {name}</b></span>
          <p>{description}</p>
        </div>
      </div>
    
  
    </div>
  )
}

export default Services
