import React from 'react'
//import {useLocation} from 'react-router-dom';
import ProdReview from './ProdReview';
import '../Homepage.css'
import { useLocation } from 'react-router-dom';
function ProductInfo() {
    //const location = useLocation();
    //const review = location.stateProd;
    const reviews1 = {
        reviewer:"Lokesh",
        desc:"Great product!",
        rating:5,
        seller:"www.amazon.com"
      };
      const reviews2 = {
        reviewer:"Rohith",
        desc:"Bad product!",
        rating:1,
        seller:"www.flipkart.com"
      };
      const reviews3 = {
        reviewer:"Shourie",
        desc:"Average product!",
        rating:1,
        seller:"www.asus.com"
      };

    const location = useLocation();
    return (
    <div>
        <ul style={{listStyleType:"None"}}>
            <li><ProdReview user={location.state.user} rev={reviews1}/></li>
            <li><ProdReview user={location.state.user} rev={reviews2}/></li>
            <li><ProdReview user={location.state.user} rev={reviews3}/></li>
        </ul>
    </div>
    )
}

export default ProductInfo