import React from'react';
import { Redirect } from 'react-router-dom';
import TaxSecondPage from './taxSecondPage.js';
import { Button } from 'react-bootstrap';
import { Router } from 'react-router-dom';

class TaxMainPage extends React.Component { 

    constructor(props, context) {
	    super(props, context);
	    this.Link = this.Link.bind(this);
	    //this.trigger = this.trigger.bind(this);
	    
	    this.state = {
	      show: false,
	      redirect:false,
	      link:'/'
	    };
      }
      
    returnATopic(){
        return "blah blah"
    }

    renderRedirect(){
		if (this.state.redirect) {
		      return <Redirect to={this.state.link} />
            }
        }
	
	Link(link) {
        this.setState({link, redirect: true});
    }

    render (){
       
        return (
        <div> 
            <h3>{this.returnATopic()}</h3>
            <h2>Tax Main Page</h2> 
            
            <Button variant="primary" onClick ={()=> this.Link('/second')}> Start </Button>

            {this.renderRedirect()}

        </div>
        )}
}
export default TaxMainPage;
