import React, {useEffect}  from 'react'
import boring from './media/boring.jpeg';
import excavatorboom01 from './media/excavatorboom01.jpeg';
import MobileWelding from './media/MobileWelding.jpeg';

import M from 'materialize-css/dist/js/materialize.min.js';

const Home = () => {

  useEffect(() => {
    //code to activate sidenav bar.
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, {});
  });
   
  return (
    <div className='home02'>
      <div className='home'>
      <h5>Welding and Repair</h5>
      <p className="left-align">We specialise in Welding repair and alterations.We refurbrish Excavator buckets, Wear plates, Tips and Adaptors. We can weld steel, castiron
      stainless steel, aluminium and brass. </p>
      </div>

        <div className="parallax-container parallax02">
            <div class="parallax">
                <img src={boring}  alt="boring picture" className="responsive-img" />
             </div>
          </div> 

          <div className='home'>
          <h5>Fabrication and Repair</h5>
      <p className="left-align">We are your ideal source for all your metal works. Get your fabrications,
       welding and repair projects completed fast to the highest quality standards right at your site.</p>
      </div>

      <div className="parallax-container parallax02">
            <div class="parallax">
                <img src={excavatorboom01}  alt="Excavator picture" className="responsive-img" />
             </div>
          </div> 

          <div className='home'>
          <h5>Mobile Welding Services</h5>
      <p className="left-align">We provide 12-hour mobile welding services in the entire country.
       Our services include: Mobile welding and fabrication, Heavy equipment welding and line boring solutions.
        We provide portable line boring work for several applications including truch housing, boom pin holes, Dozer and loaders.
         We can repair bores which are out of shape and restore them to their original dimensions on site or at our workshop.</p>
      </div>

      <div className="parallax-container parallax02">
            <div class="parallax">
                <img src={MobileWelding}  alt="Welding picture" className="responsive-img" />
             </div>
          </div> 


    </div>
  )
}

export default Home
