import React from'react';
import { Redirect } from 'react-router-dom';
import TaxSecondPage from './taxSecondPage.js';
import { Button } from 'react-bootstrap';

class TaxMainPage extends React.Component { 

    returnATopic(){
        return "blah blah"
    }
    render (){
        document.body.style.backgroundColor = "#00A3F9";
        return (
        <div> 
            <h3>{this.returnATopic()}</h3>
            <h2>Tax Main Page</h2> 
            
            <Button
            variant="primary" onClick = "location.href = 'taxSecondPage.js'"> Click to Begin
            </Button>
        </div>
        )
    }
}
export default TaxMainPage;
