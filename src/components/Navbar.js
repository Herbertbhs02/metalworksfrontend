import React, {useEffect, useState}  from 'react'
import logo from './photo/logo.jpeg'
import M from 'materialize-css/dist/js/materialize.min.js';



const Navbar = ({selection}) => {
  useEffect(() => {
    //code to activate sidenav bar.
      var elems = document.querySelectorAll('.sidenav');
       M.Sidenav.init(elems, {});
  });
  
    //xxxxmake navbar disappear during scrolling
    const [show, setShow] = useState(true)
    const controlNavbar = () =>{
      if(window.scrollY>110){ setShow(false)
      }else{setShow(true)}
    }
   useEffect(() => {
     window.addEventListener('scroll',controlNavbar)
     return () => {
       window.removeEventListener('scroll',controlNavbar)
     };
   }, [])
   //xxx


  return (
     <div className={show&&'navbar'}>
    <nav class="nav-wrapper light-blue  darken-4 ">
    <img src={logo} alt='logo'className="logo "/>
    <div href="#" className="brand-logo "><span className='logo-name'>Metalworks</span></div>
     <a href="#" data-target="mobile" class="  sidenav-trigger "><i class="material-icons icon-blue ">menu</i></a>
   <ul id="nav-mobile" class="container right hide-on-med-and-down">
     <li ><div>Email:Patrickmutumba@yahoo.co.uk </div></li>
     <li ><div>Tel:+256 759129000</div></li>
     <li ><div>Whatsapp:+256 782 473770</div></li>
     <li ><div>Tel:+44 7517447989</div></li>
      </ul>
 </nav>
 <ul class="sidenav side blue white-text darken-1"  id="mobile">
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
