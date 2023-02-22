import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import heroImg from '../assets/images/hero-img.png'
import '../style/Home.css'
import { Link } from 'react-router-dom'
import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'
import { useEffect } from 'react'
import { useState } from 'react'
import counterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/UI/Clock'


const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear();

  useEffect(() => {
    const filterdTrendingProducts = products.filter(
      item => item.category === 'chair')

    const filteredBestSalesProducts = products.filter(
      item => item.category === 'sofa')

    const filteredMobileProducts = products.filter(
      item => item.category === 'mobile')

    const filteredWirelessProducts = products.filter(
      item => item.category === 'wireless')

    const filteredPopularProducts = products.filter(
      item => item.category === 'watch')

    setTrendingProducts(filterdTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)
  }, [])
  return (

    <>
      <Helmet title={'Home'} >
        <section className='hero_section pb-lg-0 pb-5 mt-1'>
          <div className="container">
            <div className="row both">
              <div className="col-lg-6">
                <div className="hero_content">
                  <p className='hero_subtitle mt-5'>Trending product in {year}</p>
                  <h2>Make Your Home Minimalistic & Morden</h2>
                  <p className='mt-3'>Dream homes begin with dream designs. Make your home interiors the best with HomeLane's product, quality and expertise. More than 1,400 design experts all across India.</p>
                  <button className='btn btn-dark buy mt-3'><Link to="/shop">Shop Now</Link></button>
                </div>
              </div>
              <div className="col-lg-6 ">
                <img src={heroImg} alt="" width='100%' />
              </div>
            </div>
          </div>
        </section>
        <br />
        <Services />
        <section className='trending_products'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center" >
                <h2 className='section_title mt-5 '>Trending Products</h2>
              </div>
              <ProductsList data={trendingProducts} />
            </div>
          </div>
        </section>
        <section className='best_sales'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center" >
                <h2 className='section_title mt-4 '>Best Sales</h2>
              </div>
              <ProductsList data={bestSalesProducts} />
            </div>
          </div>
        </section>
        <section className='timer'>
          <div className="container mt-3">
            <div className="row">
              <div className="col-6">
                <div className="clock_header">
                  <h4 className='text-light mt-5 mb-1'>Limited Offers</h4>
                  <h3 className='text-light mb-4'>Quality Armchair</h3>
                </div>
                <Clock />
                <button className='buy btn btn-light text-dark mt-4'><Link to='/shop'>Visit Store</Link></button>
              </div>
              <div className="col-6 text-end img1">
                <img className='mt-5' src={counterImg} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className='new_arrivals mt-5'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center" >
                <h2 className='section_title mt-4 '>New Arrivals</h2>
              </div>
              <ProductsList data={mobileProducts} />
              <ProductsList data={wirelessProducts} />
            </div>
          </div>
        </section>
        <section className='popular_category'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center" >
                <h2 className='section_title mt-4 '>Popular in Category</h2>
              </div>
              <ProductsList data={popularProducts} />
            </div>
          </div>
        </section>
      </Helmet>
    </>
  )
}

export default Home