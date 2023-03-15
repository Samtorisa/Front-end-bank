import axios from 'axios'
import React, { Component } from 'react'

export default class Rdc extends Component {
    constructor (props){
        super(props)
        this.state={
            
            pramount:'',
            prype:'Para Cekildi'
            
            
    
        }
      }
      changeHandler =(e)=>{
        this.setState({[e.target.name]:e.target.value})
      }
      submitHandler  =async (e)=>{
        e.preventDefault()
        console.log(this.state)
        await axios.post("https://localhost:7049/api/ProcessHistory",e)
                .then(response=>{
                    console.log(response)
                })
                .catch(error=>{
                    console.log(error)
                })
    }
    render() {
    const{pramount}=this.state 
    return (
      <div><form onSubmit={this.submitHandler}>
        <div>
        <button type="submit"  className='mnypl'>Para çek</button>
       </div>
      <div><input type="text" name='pramount' className="mnym" value={pramount} onChange={this.changeHandler}/>
      </div></form>
      </div>
    )
  }
}
