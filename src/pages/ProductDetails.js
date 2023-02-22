import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import products from '../assets/data/products'
import { BsStarFill,BsStarHalf } from "react-icons/bs";
import '../pages/productdetail.css'
import ProductsList from '../components/UI/ProductsList'
import { useDispatch } from 'react-redux'
import { cartAction } from '../redux/slices/cartSlice'
import { toast } from "react-toastify"

const ProductDetails = () => {
  const [tab,setTab]= useState('desc')
  const { id } = useParams()
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const dispatch = useDispatch()

  const [rating,setRating] = useState(null)
  const product = products.find((item) => item?.id === id)
  console.log("Id",id);
    console.log("Id-Products",{id, products,product});
  const
    { imgUrl, productName, price, avgRating, reviews, description, shortDesc,category } = product
 
    const relatedProducts = products.filter(item=> item.category===category)
    const submitHandler =(e)=>{
      e.preventDefault()

      const reviewUnerName =reviewUser.current.value
      const reviewUserMsg =reviewMsg.current.value

     const reviewObj = {
      userName: reviewUnerName,
      text: reviewUserMsg,
      rating,
     }
      console.log(reviewObj);
      toast.success('Review submitted')
    }

    const addToCart =()=>{
      dispatch(cartAction.addItem({
        id,
        imgUrl,
        productName,
        price,

      }))
      toast.success('Product added successfully')
    }

    useEffect(()=>{
      window.scrollTo(0,0)
    },[product])
  return (
<>
    <Helmet title={productName}>
      <CommonSection title={productName}/>
      <section  detail>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img className='img2' src={imgUrl} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="product_details  mt-5">
                <h2>{productName}</h2>
                <div className="product_rating d-flex gap-3 mt-1 mb-4">
                  <div>
                    <span ><BsStarFill /></span>
                    <span ><BsStarFill /></span>
                    <span ><BsStarFill /></span>
                    <span ><BsStarFill /></span>
                    <span ><BsStarHalf /></span>
                  </div>
                  <p>({avgRating}rating)</p>
                </div>

               <div className='d-flex align-item-center gap-5'>
               <span className='fs-3 '> <b>$ {price} </b></span>
               <span>Category: {category.toUpperCase()}</span>
               </div>
                <p className='mt-3 mb-3'>{shortDesc}</p>
                <button className="btn btn-dark " onClick={addToCart }>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tab_wrapper d-flex align-items-center gap-5 mt-3">
                <h6 className={`${tab==='desc' ? 'active_tab' : ''}`} onClick={()=>setTab('desc')}>Description</h6>
                <h6 className={`${tab==='rev' ? 'active_tab' : ''}`} onClick={()=>setTab('rev')}>Reviews ({reviews.length})</h6>
              </div>
              {tab === 'desc' ? (
              <div className="tab_content mt-3 mb-3">
                <p>{description}</p>
              </div>
              ) :(
                <div className='product_review mt-5'>
                  <div className="review_wrapper">
                    <ul>
                      {
                        reviews.map((item,index)=>(
                          <li key={index} className='mb-4'>
                            <h6>Himanshu Santani</h6>
                            <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                          </li>
                        ))
                      }
                    </ul>
                    <div className="review_form">
                      <h1 className='mb-2'>Leave Your Exprience</h1>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form_group">
                          <input type="text" placeholder='Enter Name' ref={reviewUser} required/>
                        </div>
                        <div className="form_group d-flex align-items-center gap-3">
                          <span onClick={()=> setRating(1)}>1<BsStarFill /></span>
                          <span onClick={()=> setRating(2)}>2<BsStarFill /></span>
                          <span onClick={()=> setRating(3)}>3<BsStarFill /></span>
                          <span onClick={()=> setRating(4)}>4<BsStarFill /></span>
                          <span onClick={()=> setRating(5)}>5<BsStarFill /></span>
                          
                        </div>
                        <div className="form_group">
                          <textarea 
                          ref={reviewMsg}
                          row={4} 
                          type="text"
                          placeholder="Review message" 
                          required/>
                          
                        </div>
                        <button className='btn btn-dark'>Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              )}

            </div>
            <div className="col-lg-12 mt-3">
              <h2 className='related_title'>You migth also like</h2>
            </div>
            <ProductsList data={relatedProducts}/>
          </div>
        </div>
      </section>
    </Helmet>
    </>
  )
}

export default ProductDetails