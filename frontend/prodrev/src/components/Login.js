import React,{useState} from 'react';
import '../Login.css';
import { Button, Form, InputGroup, Card,Alert} from 'react-bootstrap';
import { Link,useNavigate} from 'react-router-dom';


function Login() {
  const navigate = useNavigate();

  
  const [details,setDetails] = useState({
    name : "",
    password : "",
    token : "",
    logged : false
  });

  const [access,setAccess] = useState(false);
  const [invalid,setInvalid] = useState(false)

  const loginHandler=e=>{
    e.preventDefault();
    if(details.name==="Lokesh" && details.password==="password"){
      setAccess(true);
      setDetails({...details,logged:true});
    }
    else{
      setInvalid(true);
    }
  }
  return (
    <div className='login'>
        {!access &&
        <div>
        <Card className='login-card'>
        <Link to='/'>
            <Button variant='secondary' className='home'>Go to Home</Button>
        </Link>
        <h1>Sign-in</h1>
        <InputGroup className="textbox">
            <Form.Control placeholder="Username" onChange={e=>setDetails({...details,name:e.target.value})} value={details.name}/>
        </InputGroup>
        <InputGroup className="textbox">
            <Form.Control placeholder="Password" type="password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
        </InputGroup>
        <Button variant="primary" className='login-button' onClick={loginHandler}>Login</Button>
        </Card>
        <p>No account?</p>
        <Link to="/signup">
        <Button variant="warning" className='signup-button'>Create a new account</Button>
        </Link>
        </div>
        }
        {
          invalid &&
          <>
            <br/>
            <Alert variant='danger'>Invalid Password</Alert>
          </>
        }
        {
          access && navigate('/',{state:details})
        }
    </div>
  )
}

export default Login