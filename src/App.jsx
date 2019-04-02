import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Label  from "./Label";
import TextBox from './TextBox';
import ShoppingImg from "./ShoppingImg";
import ShoppingText from "./ShoppingText";
import ShoppingFooter from "./ShoppingFooter";

export default class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
     
      <div>
           {/* <Label name='mano'/><br></br>
           <TextBox placeholder='i am here'/>
<h1 className='abcd'> lalala la</h1> */}
<ShoppingImg/>
<ShoppingText/>
<ShoppingFooter/>

      </div>
      
    
 
    );
  }
  
  
}


