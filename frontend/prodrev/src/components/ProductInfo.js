import React, {useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import ProdReview from './ProdReview';
import AddOneReview from './AddOneReview';
import "../Homepage.css"
function ProductInfo() {
    const [newReview,setNewReview] = useState(false)
    const location = useLocation();
    //const review = location.stateProd;

      const [reviews,setReviews] = useState([]); 
    const req = {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "product_name": location.state.product.product_name
        })
    };

    useEffect(()=>{
        fetch("http://localhost:9009/review/product-reviews",req)
        .then(response=>response.json())
        .then(data=>{
          setReviews(data);
          //console.log(reviews)
            });
    });

    
    return (
    <div>
      { newReview &&
          <AddOneReview user={location.state.user} product_name={location.state.product.product_name}/>
        }
        {
          location.state.user!==null &&
          <button className='add-button' onClick={()=>{setNewReview(true)}}>Add a review</button>
        }
        <ul style={{listStyleType:"None",position:"absolute",left:"355px"}}>
          {reviews.map(rev => (
              <li key={rev.id} style={{width:"300%",height:"auto",marginTop:"4%"}}><ProdReview user={location.state.user} rev={rev}/></li>
            ))}
            {/* <li><ProdReview user={location.state.user} rev={reviews1}/></li>
            <li><ProdReview user={location.state.user} rev={reviews2}/></li>
            <li><ProdReview user={location.state.user} rev={reviews3}/></li>*/}
            
        </ul>
        

    </div>
    )
}

export default ProductInfo