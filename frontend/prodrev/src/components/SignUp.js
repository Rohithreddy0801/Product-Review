import React,{ useState } from 'react'
import '../Login.css'
import logo from '../images/logo-no-background.png';
import { Alert, Button, Form, InputGroup, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function SignUp() {
  const [details,setDetails] = useState({
    name : "",
    email : "",
    password : "",
    message : ""
  });

  const [showAlert,setShowAlert] = useState(false);

  const submitHandler = (e) =>{
    e.preventDefault();

    const user_data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "username": details.name,
        "emailid": details.email,
        "password": details.password
      }) }

      fetch("http://localhost:9009/users/new-user",user_data)
      .then(response => response.json())
      .then(data=>{
          if(!data.status){
              setDetails({...details,
                  message:data.message,
              })
          }else{
              setDetails({...details, 
                  message:data.message,
                  name:data.username
              })
              
          }
          setShowAlert(true)
      })
  }

  return (
    <div className='login'>
      <img className='logo-title' src={logo} alt="Product Review"/>
        <Card className='login-card'>
        <Link to='/'>
            <Button variant='secondary' className='home'>Go to Home</Button>
        </Link>
        <h1>Sign-up</h1>
        <InputGroup className="textbox">
            <Form.Control placeholder="Username" onChange={e=>setDetails({...details,name:e.target.value})} value={details.name}/>
        </InputGroup>
        <InputGroup className="textbox">
            <Form.Control placeholder="Email ID" onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}/>
        </InputGroup>
        <InputGroup className="textbox">
            <Form.Control placeholder="Password" type="password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
        </InputGroup>
        <Button onClick={submitHandler} variant="warning" className='signup-button'>Create a new account</Button>
        </Card>
        {
          showAlert &&
          <>
            <br/>
            <Alert variant='danger'>{details.message}</Alert>
          </>
        }
        <p>Already have an account?</p>
        <Link to="/login">
        <Button variant="primary" className='login-existing-button'>Sign in to an existing account</Button>
        </Link>
    </div>
  )
}

export default SignUp