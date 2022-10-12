import React,{useState} from 'react'
import {useLocation} from 'react-router-dom';
import '../style/AddNewReview.css';
import { Alert } from "react-bootstrap";
function AddNewReview() {
    const location = useLocation();
    const user = location.state.user;
    const [showAlert,setShowAlert] = useState(false);
    const [review,setReview] = useState({
    })
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setReview(({...review, [name]: value}));
      }
    const handleSubmit = (event) => {
        event.preventDefault();

        const rev_data = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username":user.name,
                "product_name":review.product_name,
                "price":review.price,
                "rating":review.rating,
                "quality":review.quality,
                "value":review.worth,
                "link":review.link,
                "desc":review.desc,
                "image":review.image
            }) }
      
          fetch("http://localhost:9009/review/add-review",rev_data)
              .then(response => response.json())
              .then(data=>{
                  if(!data.status){
                      setReview({...review,
                          message:data.message,
                      })
                      setShowAlert(true);
                  }else{
                    setReview({...review, 
                          message:data.message
                      })
                  }
                  setShowAlert(true);
              })
      }
    return (
        <div className='review-form'>
            {showAlert &&
            <>
                <Alert variant='danger'>{review.message}</Alert>
            </>}

            <form onSubmit={handleSubmit}>
                <h1>Add a new review</h1>
                <div className='row'>
                    <input type='text' id='product-name' name='product_name' placeholder='Product Name...' value={review.product_name} onChange={handleChange}/>
                </div>

                <div className='row'>
                    <input type="number" id='price' name='price' placeholder='Price...' value={review.price} onChange={handleChange}/>
                </div>

                <div className='row-dropdown'>
                    <label>Rating: 
                        <select type="number" id="rating" name="rating" value={review.rating} onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                </div>

                <div className='row-dropdown'>
                        <label>Quality: 
                            <select type="number" id="quality" name="quality" value={review.quality} onChange={handleChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </label>
                </div>

                <div className='row-dropdown'>
                        <label htmlFor="worth">Value for money:
                        <select type="number" id="worth" name="worth" value={review.worth} onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </label>
                </div>

                <div className='row'>
                    <textarea type="text" name="image" id="image" placeholder='Image link...' value={review.image} onChange={handleChange} style={{height:"50px",marginBottom:"20px"}}/>
                </div>

                <div className='row'>
                    <textarea type="text" name="desc" id="desc" placeholder='Description...' value={review.desc} onChange={handleChange} style={{height:"200px"}}/>
                </div>

                <button className='submit-button' type='submit'>Submit</button>

            </form>
        </div>
  )
}

export default AddNewReview