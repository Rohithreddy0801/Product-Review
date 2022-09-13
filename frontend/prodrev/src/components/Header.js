import React,{useState,useEffect} from 'react'
import '../Header.css'
import { Button} from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [logged,setLogged] = useState(false)

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
            <Link to="/"><p>Product Review</p></Link>
                        <input placeholder='enter product name'/>
                        <button>search</button>
                    {!logged &&
                    <div className="sign-up-in">
                        <Link to='/login'>
                            <Button variant='primary'>Log in</Button>
                        </Link>
                        <Link to='/signup'>
                            <Button variant='success' style={{'marginLeft':'20px'}}>Create a new account</Button>
                        </Link>
                    </div>
                    }
                    {location.state!==null &&
                    <>
                      <p style={{color:"white"}}>Welcome {location.state.name}</p>
                      <button onClick={logoutHandler}>Logout</button>
                    </>}
    </div>
  );
}

export default Header;