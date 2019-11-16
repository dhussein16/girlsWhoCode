import React from'react';
import { Redirect } from 'react-router-dom';
import TaxMainPage from './taxMainPage.js';
import { Button } from 'react-bootstrap';

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
        return (<div> <h3>{this.returnATopic()}</h3>

        <TaxMainPage/>
        </div>
      )
        
    }
}

export default App;
//<h2> This is my app... or is it? ...don't look behind you fam </h2>);