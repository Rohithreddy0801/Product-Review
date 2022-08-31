import React from 'react'
import './Header.css'
import { Button, Form, Row,Col, InputGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
        <div className="website-name">
            <Link to="/">
                <span>Product </span>
                <span>Review</span>
            </Link>
        </div>
        <div className="search-bar">
            <Form>
                <Row>
                    <Col xs="auto">
                        <InputGroup className="mb-2">
                        <Form.Control id="inlineFormInputGroup" placeholder="search product..."/>
                        <Button variant='light'>Search</Button>
                        </InputGroup>
                    </Col>
                    <div className="sign-up-in">
                        <Link to='/login'>
                            <Button variant='primary'>Log in</Button>
                        </Link>
                        <span className='or'>or</span>
                        <Link to='/signup'>
                            <Button variant='success'>Create a new account</Button>
                        </Link>
                    </div>

                </Row>
            </Form>
        </div>
    </div>
  );
}

export default Header;