import React,{Component,useState} from 'react'
import serialize from 'form-serialize';


import axios from 'axios';

const Mny  = (props)=>{
  

// Addprcs = async(prcs)=>{
//  await axios.post(`https://localhost:7049/api/ProcessHistory`,prcs)
// this.setState(state=>({
//  ProccesHistry:state.ProccesHistry.concat([prcs])


//  })) }

  return (
   
      <div className="Row">
        {props.Account.map((Account)=>(
          
            <div className="Actbox" key={Account.accountId} >
              <div >
                <h2>Hesap adı:{Account.hname}</h2>
                <h3>Mevcut bakiye:{Account.hamount}</h3>

              </div>
              
            
             <div>
        <div><form > 
        <button type='submit' name='prtype'  className="mnyadd" >Para Ekle</button>
      
          
     <input type="text" name='pramount' className="mnym" />
      </form>
      </div>
       
      
         
        <div><form>
        <button type="submit"  className='mnypl'>Para çek</button>
       
      <input type="text" name='pramount' className="mnym" />
      </form>
    </div>  
      </div>

              
               </div>
              
            
           ))}
        
         </div>
  )
  
}  
export default Mny;
