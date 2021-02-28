import React, {useEffect}  from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = ({activatelogin, email, logOut}) => {
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
          <a href="#" className="brand-logo ">Shopline</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              {(email==='signIn' ? <li className='nav-link'><a href="#" onClick={activatelogin}>Sign in/Register</a></li>
              :<li className='nav-link'><a href="#">{email}<i className="material-icons left">account_circle</i></a>
              <ul className='navlogout'><li><a className='nav-li' href="#" onClick={logOut}>Logout</a></li></ul>
              </li>)}
              <li className='nav-link'><a href="#">Contact</a>
                  <ul className='navlogout'>
                    <li><div className='nav-li' href="#" >Email: h.sev@tiscali.co.uk</div></li>
                  </ul>
              </li> 
          </ul>  
        </div>
        <ul id="slide-out" className="sidenav navbar-fixed grey darken-2 ">
        
        {(email==='signIn' ? <li className='nav-link'><a href="#" onClick={activatelogin}>Sign in/Register</a></li>
              :<li className='nav-link'><a href="#">{email}<i className="material-icons left">account_circle</i></a>
              <ul className=''><li><a className='nav-li' href="#" onClick={logOut}>Logout</a></li></ul>
              </li>)}

        <li className='nav-link'><a href="#">Contact</a>
                  <ul className='navlogout'>
                    <li><div className='nav-li' href="#" >Email: h.sev@tiscali.co.uk</div></li>
                  </ul>
              </li> 
          
        </ul> 



      </nav>
    </div>
  )
}

export default Navbar
