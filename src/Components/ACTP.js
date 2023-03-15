import React,{ Component }  from 'react'
import Mny from "./Mny"
import Hstry from './Hstry'
import axios from 'axios'
import { Route, Router } from 'react-router-dom'


class ACTP extends React.Component{
  state ={
    
    Account : []

    
  }

  
  async componentDidMount(){
    const baseURL = "  https://localhost:7049/api/Account";
    const response =await fetch(baseURL);
    const dataj=await response.json();
    this.setState({Account:dataj})
  }
 
  render(){

   
  return (
    
      <div className="container">
        <h1>Hesaplarım</h1>
        <div className="row">

        </div>
      <div>
      <Mny  Account={this.state.Account}

            />
              
            
      
  </div>
      
  <Hstry/>
      
      </div>
     
    )
  }
}
export default ACTP;