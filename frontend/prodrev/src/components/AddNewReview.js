import React,{useState} from 'react'
//import {useLocation} from 'react-router-dom';
import '../style/AddNewReview.css'
function AddNewReview() {
    //const location = useLocation();
    //const user = location.state;
    const [review,setReview] = useState({
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
                <h1>Add a new review</h1>
                <div className='row'>
                    <input type='text' id='product-name' name='product_name' placeholder='Product Name...' value={review.product_name} onChange={handleChange}/>
                </div>

                <div className='row'>
                    <input type="number" id='price' name='price' placeholder='Price...' value={review.price} onChange={handleChange}/>
                </div>

                <div className='row-dropdown'>
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

                <div className='row-dropdown'>
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

                <div className='row-dropdown'>
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
                    <textarea type="text" name="desc" id="desc" placeholder='Description...' value={review.desc} onChange={handleChange} style={{height:"200px"}}/>
                </div>

                <button className='submit-button' type='submit'>Submit</button>

            </form>
        </div>
  )
}

export default AddNewReview