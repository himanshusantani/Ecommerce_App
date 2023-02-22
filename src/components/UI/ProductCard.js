import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import '../../style/product.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { cartAction } from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify';

const ProductCard = ({ item }) => {
    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(
            cartAction.addItem({
                id: item.price,
                productName: item.productName,
                price: item.price,
                imgUrl: item.imgUrl,
            }))
            
            toast.success('Product added successfully')
    }



    return (
        <>
            <div className="col-lg-3 mt-4 " style={{ textAlign: 'center' }}>
                <div className="card mx-auto" style={{ width: '18rem' }}>
                    <img src={item.imgUrl} className="card-img-top" alt="..." />
                    <div className='p-2 product_info'>
                        <h3 className="card-title">
                            <Link to={`/shop/${item.id}`}> {item.productName} </Link>
                        </h3>
                        <span className='text-center d-block'>{item.category}</span>
                    </div>
                    <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
                        <span className='price'>${item.price}</span>
                        <button className='add btn-border border-light' onClick={addToCart}><AiOutlinePlus /></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductCard