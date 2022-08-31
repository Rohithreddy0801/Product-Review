import React from 'react'
import './Header.css'
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
            <Link to="/"><p>Product Review</p></Link>
                        <input placeholder='enter product name'/>
                        <button>search</button>
                    <div className="sign-up-in">
                        <Link to='/login'>
                            <Button variant='primary'>Log in</Button>
                        </Link>
                        <Link to='/signup'>
                            <Button variant='success' style={{'marginLeft':'20px'}}>Create a new account</Button>
                        </Link>
                    </div>
    </div>
  );
}

export default Header;