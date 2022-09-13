import React,{useState} from 'react'
import {Button,Card} from 'react-bootstrap';
import '../Product.css'
import {useNavigate} from 'react-router-dom';

function Product(props) {
  const navigate = useNavigate();
  const [clicked,setClicked] = useState(false);
  const prod = props.props;
  

  return (
    <div>
      {!clicked &&
        <Card className='product'> 
          <p>Product Name : {prod.name}</p>
          <img className='product-dp' src={prod.image} alt="img"/>
          <br/>
          <Button onClick={e=>setClicked(true)}>Click to view/add reviews</Button>
        </Card>
      }
      {
        clicked &&
        navigate("/productinfo",{stateProd:prod})
      }
    </div>
  )
}

export default Product