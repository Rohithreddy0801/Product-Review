import React from 'react'
import {Button,Card} from 'react-bootstrap'
function Product() {
  return (
    <div>
        <Card className='product'> 
            <p>Product Name : Gun</p>
            <p>Image : img</p>
            <Button>Click to view/add reviews</Button>
        </Card>
    </div>
  )
}

export default Product