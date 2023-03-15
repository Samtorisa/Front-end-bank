import React, { Component } from 'react'

export default class Histrybutton extends Component {
  state ={
    
    ProccesHistry : []

    
  } 
  async componentDidUpdate(ProccesHistry){
    const baseURL = ` https://localhost:7049/api/ProccesHistry${ProccesHistry.Id}`
    const response =await fetch(baseURL);
    const datab=await response.json();
    this.setState({ProccesHistry:datab})
  }
  render() {
    return (
      <div>
        <div>
        <form><button type='button'  className="btnhstry">Geçmiş</button></form>
       </div>
      </div>
    )
  }
}
