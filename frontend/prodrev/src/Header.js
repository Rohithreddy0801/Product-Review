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
                <Row className="align-items-center">
                    <Col xs="auto">
                        <InputGroup className="mb-2">
                        <Form.Control id="inlineFormInputGroup" placeholder="search product..." style={{'width':'10cm'}}/>
                        <Button>Q</Button>
                        </InputGroup>
                    </Col>
                    <Col>
                        
                    </Col>

                </Row>
            </Form>
        </div>
    </div>
  );
}

export default Header;