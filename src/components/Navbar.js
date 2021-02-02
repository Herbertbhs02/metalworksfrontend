import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
       <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo ">Shopline</a>
      
      <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className='nav-link'><button>Pending</button></li>
          <li className='nav-link'><button>Contact</button></li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
