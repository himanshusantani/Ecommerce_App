import React from 'react'
import '../UI/CommonSection.css'
const CommonSection = ({title}) => {
  return (
    <>
    <section className='CommonSection mt-5 pb-5 pt-5'>
        <div className="container text-center">
            <h1>{title}</h1>
        </div>
    </section>
    </>
  )
}

export default CommonSection