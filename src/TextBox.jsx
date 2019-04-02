import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class TextBox extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
<div>

    <input type='text' placeholder={this.props.placeholder}></input>

</div>
        
    );
}


}

