import React, {useEffect}  from 'react'
import logo from './photo/logo.jpeg'
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = () => {
  useEffect(() => {
    //code to activate sidenav bar.
      var elems = document.querySelectorAll('.sidenav');
       M.Sidenav.init(elems, {});
  });
  


  return (
    <div className='navbar '>
    <nav class="nav-wrapper light-blue  darken-4 ">
    <img src={logo} alt='logo'className="logo "/>
    <div href="#" className="brand-logo "><span className='logo-name'>Metalworks</span></div>
     <a href="#" data-target="mobile" class="  sidenav-trigger "><i class="material-icons icon-blue ">menu</i></a>
   <ul id="nav-mobile" class="container right hide-on-med-and-down">
     <li ><div>Email:Patrickmutumba@yahoo.co.uk </div></li>
     <li ><li><div>Tel:+256 759129000</div></li></li>
     <li ><div>Whatsapp:+256 782 473770</div></li>
     <li ><li><div>Tel:+44 7517447989</div></li></li>
   </ul>
 </nav>
 <ul class="sidenav side light-blue white-text darken-1"  id="mobile">
     <li><div>Email:Patrickmutumba@yahoo.co.uk</div></li>
     <li><div>Tel:+256 759129000</div></li>
     <li><div>Tel:+44 7517447989</div></li>
     <li><div>Whatsapp:+256 782 473770</div></li>
     
     
     <li><a class="sidenav-close" href="#!"><i class="material-icons right">close</i></a></li>
 </ul>
 </div>
  )
}

export default Navbar
