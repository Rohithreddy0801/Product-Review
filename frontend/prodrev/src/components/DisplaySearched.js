import React from 'react'
import {useLocation} from 'react-router-dom';
import Product from './Product'
import '../Homepage.css'

function DisplaySearched(reviews) {
    const reviewsList = reviews.reviews
    console.log(reviews)
    const location = useLocation();
    const user = location.state;
  return (
    <div className='products'>
        <ul className='product-list'>
        {reviewsList.map(rev => (
              <li key={rev.id}><Product props={{"item":rev,"user":user}}/></li>
            ))}
            
        </ul>
    </div>
  )
}

export default DisplaySearched