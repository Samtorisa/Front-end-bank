import React, { Component } from 'react'
import axios from 'axios'
import serialize from 'form-serialize'

export default class Addsub extends Component {
  
  
  
  submitHandler  =async (e)=>{
    e.preventDefault()
    const newProcces=serialize(e.target,{hash:true});
    this.props.onAddSub(newProcces);
}
    
    
  render() {
       
    return (
      <div><form onSubmit={this.submitHandler}>
        <div>
        <button type='submit' name='prtype'  className="mnyadd" >Para Ekle</button>
       </div>
        <div>  
     <input type="text" name='pramount' className="mnym" />
      </div>
       </form>
      </div>
    )
  }
}
