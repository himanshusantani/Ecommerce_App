import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../pages/cart.css'
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../redux/slices/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector(state=> state.cart.cartItems)
  const totalAmount = useSelector(state=> state.cart.totalAmount)

  return (
    <>
    <Helmet title='Cart'>
    <CommonSection title="Shopping Cart"/>
    <section>
      <div className="container">
        <div className="row">

          <div className="col-lg-9 mt-5">
            {
              cartItems.length===0 ? ( <h2 className='fs-4 text-center'>No item added to the cart</h2>) :(
              <table className='table bordered'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
             {
              cartItems.map((item,index)=>(
                <Tr item={item} key={index}/>
              ))
             }
            </tbody>

          </table>
              )
            }
          
          </div>
          <div className="col-lg-3">
            {/* <h6>Subtotal</h6> 
            <span>${totalAmount}</span>
            <p>taxes and shipping will calculate in checkout</p> */}
             <button className='btn btn-dark mt-5 mb-2'><Link to='/shop'>Continue Shopping</Link></button> 
             <div>
        <button className='btn btn-dark'><Link to='/checkout'>Checkout</Link></button> 
        </div>
          </div>
         
        </div>
        

      </div>
    </section>
    </Helmet>

    </>
  )
}

const Tr = ({item})=> {

  const dispatch = useDispatch()

  const deleteProduct = ()=>{
    dispatch(cartAction.deleteItem(item.id))
  }
  return (
  <tr>
                <td><img className='img2' src={item.imgUrl} alt="" /></td>
                <td>{item.productName} </td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td style={{cursor:'pointer'}} onClick={deleteProduct}><AiOutlineDelete /></td>
              </tr>
  )
}

export default Cart