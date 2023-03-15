import React, { Component } from 'react'

export default class Histry extends Component {
  Constructor(){
        super();
  this.state={
    ShowContent:false
    
  }
  this.showMore=this.showhstry.bind(this)
 
 }
showhstry =()=>{
  //statenin var olan durumunu değiştirecek
  this.setState({ShowContent:!this.state.showhstry}) 
}
  
  // showhstry(){
  // this.setState({ShowContent:true})   } 
    render() {
    

    return (
      <div><form><input type="button" id='hstry'>
        </input>
        {this.state.ShowContent?(<div className="pyhstry">{this.props.children}</div>):null}</form>
        
      </div>
    )
  }
}
