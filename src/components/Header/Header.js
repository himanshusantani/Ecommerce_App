import React from 'react'
import { AiFillShopping } from "react-icons/ai";
import { BsFillSuitHeartFill, BsCartCheck, BsFillPersonFill } from "react-icons/bs";
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


const Header = () => {
const totalQuantity = useSelector(state=> state.cart.totalQuantity)
const navigate = useNavigate()
const navigateToCart = () =>{
navigate('/cart')
}

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" >
          <div className="container-fluid">
            <b className="navbar-brand">  <AiFillShopping style={{ fontSize: '25px' }} />  HS Store </b>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link className="nav-link active" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/shop">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/cart">Cart</Link>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* <li>

                  <span className="nav-link heart" href="/"><BsFillSuitHeartFill style={{ fontSize: '25px' }} />
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                      1
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </span>

                </li> */}
                <li>
                  <span className="nav-link cart" onClick={navigateToCart}><BsCartCheck style={{ fontSize: '25px' }} />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                      {totalQuantity}
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </span>
                  
                </li>
                <li>
                  <span className="nav-link person" href="/"><BsFillPersonFill style={{ fontSize: '25px' }} /></span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header