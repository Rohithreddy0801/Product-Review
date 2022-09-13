import React from 'react'
//import {useLocation} from 'react-router-dom';
import ProdReview from './ProdReview';
import '../Homepage.css'
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
    return (
    <div>
        <ul style={{listStyleType:"None"}}>
            <li><ProdReview rev={reviews1}/></li>
            <li><ProdReview rev={reviews2}/></li>
            <li><ProdReview rev={reviews3}/></li>
        </ul>
    </div>
    )
}

export default ProductInfo