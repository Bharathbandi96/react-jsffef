import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'welcome',
    };
  }

  changeTitle(title){
    this.setState({title})
  }

render(){
  // setTimeout(()=>{
  //   this.setState({title= 'welcome will'});
  // },2000)
  return(
    <div>
      
      <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
      <Footer />
    </div>
  );
}
}