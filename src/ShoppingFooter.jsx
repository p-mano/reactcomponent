import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class ShoppingFooter extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
<div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              

                        <div className="stats">

                            <div>
                                <strong>Mother Name</strong> Enter Here
                            </div>

                            <div>
                                <strong>DOb</strong>  Enter Here
                            </div>

                            <div>
                                <strong>age</strong>  Enter Here
                            </div>

                        </div>

                        <div className="stats">

                            <div>
                                <strong>INVITED</strong> 3098
                            </div>

                            <div>
                                <strong>JOINED</strong> 562
                            </div>

                            <div>
                                <strong>DECLINED</strong> 182
                            </div>

                        </div>

                        <div className="stats">

                            <div>
                                <strong>INVITED</strong> 3098
                            </div>

                            <div>
                                <strong>JOINED</strong> 562
                            </div>

                            <div>
                                <strong>DECLINED</strong> 182
                            </div>

                        </div>

                        <div className="footer">
                            <a href="#" className="Cbtn Cbtn-primary">View</a>
                            <a href="#" className="Cbtn Cbtn-danger">Delete</a>
                        </div>
                    </div>
                </div> 
            </div>

   
        
    );
}


}

