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
        <h1>Sign-up</h1>
        <InputGroup className="textbox">
            <Form.Control placeholder="Username"/>
        </InputGroup>
        <InputGroup className="textbox">
            <Form.Control placeholder="Password"/>
        </InputGroup>
        <Link to="/">
        <Button variant="warning" className='signup-button'>Create a new account</Button>
        </Link>
        </Card>
        <p>Already have an account?</p>
        <Link to="/login">
        <Button variant="primary" className='login-existing-button'>Sign in to an existing account</Button>
        </Link>
    </div>
  )
}

export default Login