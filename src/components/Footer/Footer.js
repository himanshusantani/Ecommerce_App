import React from 'react'
import { Link } from 'react-router-dom'
import '../Footer/footer.css'
import { AiFillShopping,AiFillShop } from "react-icons/ai";
import { MdLocationOn, MdLocalPhone, MdEmail, MdShoppingCart, MdLogin, MdPrivacyTip } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>

      <div className="footer">
        <div className="container  mt-3">
          <div className="row ">
            <div className="col-lg-4 mt-5">
              <div className="navbar-brand">
                <a href="/" style={{ fontSize: '25px' }} className='text-light '> <AiFillShopping style={{ fontSize: '30px' }} /><b> HS Store</b> </a>
              </div>
              <p className="footer_text mt-2">HS Store Private Limited,Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Kamptee, Nagpur, 441002, Maharashta, India</p>
            </div>
            <div className="col-lg-3 mt-5">
              <div className="footer_quick-links">
                <h4 className='quick_links-title text-light'>Top Categories</h4>
                <ul class="list-group mt-2">
                  <li class="list-group-item ps-0 border-0"><Link to='#'>Mobile Phones</Link></li>
                  <li class="list-group-item ps-0 border-0"><Link to='#'>Morden Sofa</Link></li>
                  <li class="list-group-item ps-0 border-0"><Link to='#'>Arm Chair</Link></li>
                  <li class="list-group-item ps-0 border-0"><Link to='#'>Smart Watches</Link></li>
                  <li class="list-group-item ps-0 border-0"><Link to='#'>Wireless Headphones</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 mt-5">
              <div className='direct'>
                <h4 className='quick_links-title text-light '>Direct Links</h4>
                <ul class="list-group mt-2">
                  <li class="list-group-item ps-0 border-0"><Link to='shop'><AiFillShop /> Shop</Link></li>
                  <li class="list-group-item ps-0 border-0"><Link to='cart'><MdShoppingCart /> Cart</Link></li>
                  <li class="list-group-item ps-0 border-0"><Link to='login'><MdLogin /> Login</Link></li>
                  <li class="list-group-item ps-0 border-0"><Link to='#'><MdPrivacyTip /> Privacy Policy</Link></li>

                </ul>
              </div>
            </div>
            <div className="col-lg-3 mt-5">
              <div className="contacts">
                <h4 className='quick_links-title text-light'>Contact Us</h4>
                <ul class="list-group contact mt-2">
                  <li class="list-group-item ps-0 border-0"><span><MdLocationOn  style={{ fontSize: '25px'  }} /></span>
                    <p>441002 Kamptee, Nagpur</p>
                  </li>
                  <li class="list-group-item ps-0 border-0"><span><MdLocalPhone  style={{ fontSize: '25px' }} /></span>
                    <p>+91-87654-32109</p>
                  </li>
                  <li class="list-group-item ps-0 border-0"><span><MdEmail style={{ fontSize: '25px' }} /></span>
                    <p>hsstore123@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 mt-3 mb-3">
              <p className='copyright'>Copyright {year} Developed by Himanshu Santani. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer