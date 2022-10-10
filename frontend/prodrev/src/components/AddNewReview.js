import React,{useState} from 'react'
//import {useLocation} from 'react-router-dom';
import '../style/AddNewReview.css'
function AddNewReview() {
    //const location = useLocation();
    //const user = location.state;
    const [review,setReview] = useState({
        "product_name":"",

        
    })
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setReview(({...review, [name]: value}));
        //console.log(review)
      }
     const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(review));
      }
    return (
        <div className='review-form'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <label>Product Name:
                        <input type='text' id='product-name' name='product_name' value={review.product_name} onChange={handleChange}/>
                    </label>
                </div>

                <div className='row'>
                    <label>Price:
                        <input type="number" id='price' name='price' value={review.price} onChange={handleChange}/>
                    </label>
                </div>

                <div className='row'>
                    <label>Rating: 
                        <select id="rating" name="rating" value={review.rating} onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                </div>

                <div className='row'>
                        <label>Quality: 
                            <select id="quality" name="quality" value={review.quality} onChange={handleChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </label>
                </div>

                <div className='row'>
                        <label htmlFor="worth">Value for money:
                        <select id="worth" name="worth" value={review.worth} onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </label>
                </div>

                <div className='row'>
                        <label>Description: 
                            <textarea type="text" name="desc" id="desc"  value={review.desc} onChange={handleChange} style={{height:"200px"}}/>
                        </label>
                </div>

                <input type='submit'/>

            </form>
        </div>
  )
}

export default AddNewReview