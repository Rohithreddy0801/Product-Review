import React from 'react'
import './Header.css'
import { Button, Form} from 'react-bootstrap';
function Header() {
  return (
    <div className='header'>
        <div className="website-name">
            <span>Product </span>
            <span>Review</span>
        </div>
        <div className="search-bar">
            <Form.Group controlId="search" style={{marginBottom:"10px"}}>
                <Form.Control placeholder='search product...' type="text" name="search"/>
                <Button/>
            </Form.Group>
        </div>
    </div>
  )
}

export default Header