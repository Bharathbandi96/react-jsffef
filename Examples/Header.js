import React from 'react'
import Title from './Header/Title'
export default class Header extends React.Component {

   handleChange(e){
    const title =  e.target.value;
    this.props.changeTitle(title);
  }

render(){
  return(
    <div>
    <h2> Hello you can change the header dynamically...! Can Try below</h2>
    <Title title={this.props.title}/>
    <input  value = {this.props.title} onChange = {this.handleChange.bind(this)}/>
    </div>
  );
}
}