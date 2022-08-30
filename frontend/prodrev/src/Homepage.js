import React from 'react'
import Product from './Product'
import './Homepage.css'

function Homepage() {
  return (
    <div className='products'>
        <ul className='product-list'>
            <li><Product/></li>
            <li><Product/></li>
            <li><Product/></li>
            <li><Product/></li>
            <li><Product/></li>
            <li><Product/></li>
            <li><Product/></li>
            <li><Product/></li>
            <li><Product/></li>
        </ul>
    </div>
  )
}

export default Homepage