import React,{useState,useEffect} from 'react'
import '../Header.css'
import logo from '../images/logo-no-background.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [logged,setLogged] = useState(false)
  const user = location.state;

  const goToHomeHandler = e =>{
    e.preventDefault();
    navigate('/',{state:user})
  }

  const addReviewHandler = e =>{
    e.preventDefault();
    navigate('/addreview',{state:user})
  }

  const logoutHandler = e =>{
    e.preventDefault();
    location.state=null;
    setLogged(false);
    navigate('/');
  }

  useEffect(()=>{
    if(location.state!==null){
      setLogged(true);
    }
  })
  return (
    <div className='header'>
      <div className="search">
        <input placeholder='enter product name'/>
        <button>search</button>
      </div>
      <img src={logo} alt='Product Review' className='logo-img' onClick={goToHomeHandler}/>
      <div className='header-right'>
        {!logged &&
          <div className="sign-up-in">
            <Link to='/login'>
              <button variant='primary'>Log in</button>
            </Link>
            <Link to='/signup'>
              <button variant='success' style={{'marginLeft':'20px'}}>Create a new account</button>
            </Link>
          </div>
          }
        </div>
        {location.state!==null &&
        <>
            <p className='welcome-user'>Welcome, {location.state.name}</p>
          <div className='header-right'>
            <button className='add-review-button' onClick={addReviewHandler}>Add Review</button>
            <button className='logout-button' onClick={logoutHandler}>Logout</button>
          </div>
        </>}
    </div>
  );
}

export default Header;