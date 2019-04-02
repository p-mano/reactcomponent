import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Label extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
<div>
    <label>label Component {this.props.name}</label>
 

</div>
        
    );
}


}

