import React,{useState} from 'react';
import '../Login.css';
import logo from '../images/logo-no-background.png';
import { Button, Form, InputGroup, Card,Alert} from 'react-bootstrap';
import { Link,useNavigate} from 'react-router-dom';


function Login() {
  const navigate = useNavigate();

  
  const [details,setDetails] = useState({
    name : "",
    email: "",
    password : "",
    token : "",
    logged : false,
    message : ""
  });

  const [access,setAccess] = useState(false);
  const [invalid,setInvalid] = useState(false)

  const loginHandler=e=>{
    e.preventDefault();

    const user_data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "emailid": details.email,
        "password": details.password
      }) }

    fetch("http://localhost:9009/users/login",user_data)
        .then(response => response.json())
        .then(data=>{
            if(!data.status){
                setDetails({...details,
                    message:data.message,
                })
                setInvalid(true);
            }else{
                setDetails({...details, 
                    message:data.message, 
                    status:true, 
                    token:data.JWT_token,
                    name:data.username,
                    email:data.email,
                    logged:true
                })
                setAccess(true);
                //console.log("isAdmin"+details.isAdmin);
                //console.log(details);
                //console.log(data.isAdmin);
                
            }
        })
    }
  return (
    <div className='login'>
      <img className="logo-title" src={logo} alt="Product Review"/>
        {!access &&
        <div>
        <Card className='login-card'>
        <Link to='/'>
            <Button variant='secondary' className='home'>Go to Home</Button>
        </Link>
        <h1>Sign-in</h1>
        <InputGroup className="textbox">
            <Form.Control placeholder="Email ID" onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}/>
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
            <Alert variant='danger'>{details.message}</Alert>
          </>
        }
        {
          access && navigate('/',{state:{"user":details}})
        }
    </div>
  )
}

export default Login