import React from 'react'
import './Header.css'
import { Button, Form, Row,Col, InputGroup} from 'react-bootstrap';
function Header() {
  return (
    <div className='header'>
        <div className="website-name">
            <span>Product </span>
            <span>Review</span>
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
                        <Button variant='primary'>Log in</Button>
                        <span className='or'>or</span>
                        <Button variant='success'>Create a new account</Button>
                    </div>

                </Row>
            </Form>
        </div>
    </div>
  );
}

export default Header;