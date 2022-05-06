import React, {useEffect}  from 'react'
import logo from './photo/logo.jpeg'
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = ({ email, logOut}) => {
  useEffect(() => {
    //code to activate sidenav bar.
      var elems = document.querySelectorAll('.sidenav');
       M.Sidenav.init(elems, {});
  });
  


  return (
    <div className='navbar '>
      <nav>
        <div className="nav-wrapper orange darken-5">
        <a href="#" data-target="slide-out" class="  sidenav-trigger "><i class="material-icons icon-white ">menu</i></a>
          <img src={logo} alt='logo'className="logo "/>
          <div href="#" className="brand-logo ">Metalworks</div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
             
           
          </ul>  
        </div>
        <ul id="slide-out" className="sidenav navbar-fixed grey darken-2 ">
        
        <li className='nav-link'><a href="#">Contact</a>
                  <ul className='navlogout'>
                    <li><div className='nav-li' href="#" >Email:Patrickmutumba@yahoo.co.uk</div></li>
                  </ul>
              </li> 
          
        </ul> 



      </nav>
    </div>
  )
}

export default Navbar
