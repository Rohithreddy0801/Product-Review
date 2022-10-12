import React,{useState,useEffect} from 'react'
import '../Header.css'
import DisplaySearched from './DisplaySearched';
import logo from '../images/logo-no-background.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [logged,setLogged] = useState(false)
  const user = location.state;
  

  const goToHomeHandler = e =>{
    e.preventDefault();
    if(user!=null){
      navigate('/',{state:{"user":user.user}})}
    else{
      navigate('/');
    }
  }

  const addReviewHandler = e =>{
    e.preventDefault();
    navigate('/addreview',{state:{"user":user.user}})
  }

  const logoutHandler = e =>{
    e.preventDefault();
    location.state=null;
    setLogged(false);
    navigate('/');
  }

  useEffect(()=>{
    if(location.state!==null && user.user!==null){
      setLogged(true);
    }

    if(searched){
      searchReviews()
    }
  })

  const [searched,setSearched] = useState(false);
  const [searchIn,setSearchIn] = useState("");
  const [reviews,setReviews] = useState([]); 
    const req = {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "product_name": searchIn
        })
    };

    const searchReviews = (()=>{
        fetch("http://localhost:9009/review/product-reviews",req)
        .then(response=>response.json())
        .then(data=>{
          setReviews(data);
            });
        setSearched(true);
    });

  return (
    <div>
    <div className='header'>
      <div className="search">
        <input placeholder='enter product name' name='search_input' value={searchIn} onChange={e=>setSearchIn(e.target.value)}/>
        <button onClick={searchReviews}>search</button>
      </div>
      <img src={logo} alt='Product Review' className='logo-img' onClick={goToHomeHandler}/>
      <div className='header-right'>
        {!logged &&
          <div className="sign-up-in">
            <Link to='/login'>
              <button className='login-button'>Log in</button>
            </Link>
            <Link to='/signup'>
              <button className='signup-button'>Create a new account</button>
            </Link>
          </div>
          }
        </div>
        {location.state!==null && user.user!=null &&
        <>
            <p className='welcome-user'>Welcome, {user.user.name} </p>
          <div className='header-right'>
            <button className='add-review-button' onClick={addReviewHandler}>Add Review</button>
            <button className='logout-button' onClick={logoutHandler}>Logout</button>
          </div>
        </>}
    </div>
    {searched && <DisplaySearched reviews={reviews}/>}
    </div>
  );
}

export default Header;