import React from 'react'
import ReactDom from 'react'
import Exp from './Exp.js'

export default class DateTime extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      count : Date()
    };
  }

  //   message(){
  //     setTimeout(()=>{this.setState({count:'your event made date invisible...!'})});
  // }
  
  render() {
    setTimeout(()=>{
      this.setState({count:Date()})
    },1000);
    return (
      <div>
        <p> Hello, This is the today's Date and Time : {this.state.count} </p>
      </div>
    );
  }
}