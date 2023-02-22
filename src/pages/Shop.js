import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { BsSearch } from "react-icons/bs";
import '../pages/shop.css'
import products from '../assets/data/products';
import { useState } from 'react';
import ProductsList from '../components/UI/ProductsList';
const Shop = () => {

  const [productsData, setProductsData] = useState(products)
  const handleFilter = e => {
    const filterValue = e.target.value

    if (filterValue === 'sofa') {
      const filterProducts = products.filter(
        (item) => item.category === "sofa"
      )
      setProductsData(filterProducts)
    }

    if (filterValue === 'mobile') {
      const filterProducts = products.filter(
        (item) => item.category === "mobile"
      )
      setProductsData(filterProducts)
    }

    if (filterValue === 'chair') {
      const filterProducts = products.filter(
        (item) => item.category === "chair"
      )
      setProductsData(filterProducts)
    }

    if (filterValue === 'watch') {
      const filterProducts = products.filter(
        (item) => item.category === "watch"
      )
      setProductsData(filterProducts)
    }

    if (filterValue === 'wireless') {
      const filterProducts = products.filter(
        (item) => item.category === "wireless"
      )
      setProductsData(filterProducts)
    }
  }

  const handleSearch = e => {
    const searchTerm = e.target.value

    const searchProducts = products.filter
      (item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductsData(searchProducts)
  }
  return (
    <>


      <Helmet title='Shop'>
        <section>
          <CommonSection title='Products' />
          <div className="container mt-4 mb-4" >
            <div className="row">
              <div className="col-lg-3">
                <div className="filter_widget">
                  <select onChange={handleFilter}>
                    <option >Filter By Category</option>
                    <option value="sofa" >Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="chair">Chair</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="search fs-6">
                  <input type="text" placeholder='Search..... ' onChange={handleSearch} />
                  <span><BsSearch /></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              {
                productsData.length === 0 ? (
                  <h1 className='text-center mt-4 mb-4'>No Products are found!</h1>
                ) : (
                  <ProductsList data={productsData} />
                )}
            </div>
          </div>

        </section>
      </Helmet>
    </>
  )
}

export default Shop