import React from 'react'
import './Login.css'
import { Button, Form, InputGroup, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='login'>
        
        <Card className='login-card'>
        <Link to='/'>
            <Button variant='secondary' className='home'>Go to Home</Button>
        </Link>
        <h1>Sign-in</h1>
        <InputGroup className="textbox">
            <Form.Control placeholder="Username"/>
        </InputGroup>
        <InputGroup className="textbox">
            <Form.Control placeholder="Password"/>
        </InputGroup>
        <Button variant="primary" className='login-button'>Login</Button>
        </Card>
        <p>No account?</p>
        <Link to="/signup">
        <Button variant="warning" className='signup-button'>Create a new account</Button>
        </Link>
    </div>
  )
}

export default Login