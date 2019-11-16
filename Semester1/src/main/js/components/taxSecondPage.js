//asks what state someone is in to get the tax rate
import React from'react';
import { Redirect } from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

class TaxSecondPage extends React.Component{
    
    render (){
        return (
            <div>
        <h2>What state are you in?</h2><Dropdown as={ButtonGroup}>
    <Button variant="success">Split Button</Button>

    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown></div>)
    }
}

export default TaxSecondPage;
