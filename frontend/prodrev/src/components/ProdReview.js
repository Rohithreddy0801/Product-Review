import React from 'react'
import {Card} from 'react-bootstrap';
import '../ProdReview.css'
function ProdReview(prop) {
    const rev = prop.rev;
    return (
    <div>
        {console.log(prop)}
        <Card className="review"> 
          <p>Reviewer: {rev.reviewer}</p>
          <p>Descriptin: {rev.desc}</p>
          <p>Rating: {rev.rating}</p>
          <p>Seller: {rev.seller}</p>
        </Card>
    </div>
  )
}

export default ProdReview