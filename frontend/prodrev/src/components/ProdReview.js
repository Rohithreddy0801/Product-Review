import React from 'react'
import {Card} from 'react-bootstrap';
import '../ProdReview.css'
function ProdReview(prop) {
    const rev = prop.rev;
    return (
    <div>
        {console.log(prop)}
        <Card className="review"> 
          <p>Reviewer: {rev.username}</p>
          <p>Product: {rev.product_name}</p>
          <img src={rev.image} alt={"s"}/>
          <p>Description: {rev.desc}</p>
          <p>Rating: {rev.rating}</p>
          <p>Value for money: {rev.value}</p>
          <p>Quality: {rev.quality}</p>
        </Card>
    </div>
  )
}

export default ProdReview