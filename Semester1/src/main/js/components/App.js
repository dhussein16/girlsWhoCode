import React from'react';
import { Redirect } from 'react-router-dom';
import TaxMainPage from './taxMainPage.js';
import { Button } from 'react-bootstrap';
import TaxSecondPage from './taxSecondPage.js';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

    constructor(props){ //you need to put props here or it won't work
        super(props);
        this.state = {topic : "", count: 0};
    }
    returnATopic(){
        return "something"
    }
    render(){

        const {topic, count} = this.state;
        return (<div> <h3>{this.returnATopic()}
        <Router>
			<div>
				<Switch>
					<Route exact path='/' component={TaxMainPage}/>
                    <Route path='/second' component={TaxSecondPage}/>
				</Switch>
			</div>
			</Router></h3>

        </div>
      )
        
    }
}

export default App;
//<h2> This is my app... or is it? ...don't look behind you fam </h2>);