import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class ShoppingImg extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
<div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="tile">
                    <div className="wrapper">
                        <div className="header">Event Title</div>

                        <div className="banner-img">
                            <img src="https://stylewhack.com/wp-content/uploads/2017/12/joker-face-painting.jpg" alt="Image 1"></img>
                        </div>

                     </div>   
            </div>
</div>
                  </div>
    </div>
        
    );
}


}

