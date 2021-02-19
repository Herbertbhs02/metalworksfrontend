import React, {useState}  from 'react'

const Navbar = ({activatelogin, email}) => {


  return (
    <div className='navbar'>
       <nav>
    <div className="nav-wrapper">
    
      <a href="#" className="brand-logo ">Shopline</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      {(email==='signIn' ? <li className='nav-link'><a href="#" onClick={activatelogin}>Sign in/Register</a></li>
      :<li className='nav-link'><a href="#">{email}<i className="material-icons left">account_circle</i></a></li>)}
      <li className='nav-link'><a href="#">Contact</a></li>
          
      </ul>
      
    </div>
  </nav>
    </div>
  )
}

export default Navbar
