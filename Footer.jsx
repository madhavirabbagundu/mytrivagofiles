import React from 'react'
import './NavbarFooter.css'
function Footer() {
  return (
    <>
      <div className='Footer'>
        <div className='Footer_first_child'>
          <div><p>Want to receive exclusive hotel offers? Subscribe to our newsletter!</p></div>
          <div>
            <div><input type="text" placeholder='Email address' /></div>
            <div><button>Subscribe</button></div>
          </div>
        </div>
        <hr className='footerhr'/>
        <div className="footerSelectBox">
          <div>
            <p ><b>trivago N.V.,</b> KesselstraBe 5-7,40221 Dusseldorf,</p>
            <p>Germany</p>
          </div>
          {/* <span> */}

          <div>
            <select className='SelectData'>
              <option>India</option>
              <option>India</option>
              <option>India</option>
              <option>Australia</option>
              <option>Brazil</option>
              <option>Arab</option>
              <option>Chill</option>
              <option>china</option>
              <option>maharastra</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>bihar</option>
              <option>maharastra</option>
              <option>AUstrali</option>
              <option>Japan</option>
              <option>Germany</option>
              <option>Hang kong</option>
              <option>Greece</option>


            </select>
          </div>
        </div>
        {/* </span> */}


        <div className='Image'>
          <div className='Image1'>
            <a href="https://twitter.com/trivago" style={{ textDecoration: 'none' }} ><img className="Image" src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png" /></a>
            <a href="https://www.instagram.com/trivago/" style={{ textDecoration: 'none' }}> <img className="Image" src="https://i.pinimg.com/originals/41/e4/57/41e457e8599833299d563976b7d3c59a.jpg" /></a>
            <a href="https://www.facebook.com/trivago"> <img className="Image" src="https://i.pinimg.com/originals/ee/93/32/ee933267f1290803739dd38bca4a9b25.jpg" /></a>
            <a href="https://www.linkedin.com/company/trivagogmbh/" style={{ textDecoration: 'none' }}> <img className="Image" src="https://i.pinimg.com/originals/20/9b/d8/209bd859c265e7ffc4bfeb75877b23f7.png" /></a>

            <a href="#" style={{ textDecoration: 'none' }}><img className="Image" src="https://toppng.com/uploads/preview/linkedin-square-logo-comments-linkedin-icon-black-11563087424lpctodfamj.png" /></a>

          </div>
        </div>

        <div className='footer'>
          <div className='footer1'>
            <a href="#">Company</a><br />
            <a href="#">Jobs</a><br />
            <a href="#">Press</a><br />
            <a href="#">Investor relation</a>
          </div>
          <div className='footer2'>
            <a href="#">Mobile apps-searching on the go</a><br />
            <a href="#" style={{ marginBottom: 90 }}>trivago Business Studio</a>
          </div>

          <div className='footer3'>
            <a href="#">Help</a><br />
            <a href="#">Learn how trivago works</a><br />
            <a href="#">Terms and conditions</a><br />
            <a href="#">Legal information</a><br />
            <a href="#"> Do Not Sell My Personal Information</a>
            <a href="#">Private notice</a><br />
            <a href="#">Cyber Security</a><br />
            <a href="">Advice</a>

          </div>
        </div>
        <div className='footerCopyrightBox'><h1 style={{ textAlign: 'center' }}>trivago</h1>
          <p >Copyright 2022 trivago | All right reserved</p>
        </div>
      </div>
    </>
  )
}
export { Footer }