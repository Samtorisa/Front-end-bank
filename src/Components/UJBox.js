import React,{Component,Fragment,useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from "axios";
 



function UJBox() {   
   
    const navigate = useNavigate()
    const [usrr_name,setusr_name]=useState("");
  const [passsword,setpassword]=useState("");
  const handleusr_nameChange =(value)=>{
    setusr_name(value);
  };
  const handlepasswordChange= (value)=>{
    setpassword(value);
  };
    const handleLogin = () =>{
      const url ='https://localhost:7049/api/Auth/login';
        const data ={
        Username:usrr_name,
        password:passsword
        };
        
        axios.post(url,data).then((result) =>{
        alert(result.data)
         
        }).catch((error)=>{
        alert(error);
        })
        
        navigate("/ACTP");
        
        
      };
      
     return(
   <Fragment>
        <div className="boxx">
            <div className="boxpozition">
            <div className="Usrname">
                <p>Kullanıcı Adı</p>
            </div>
            <div className="Usrnbx">
                <form ><input type="text" className="uname"  onChange={(e)=>handleusr_nameChange(e.target.value)}/></form>
            </div>
            <div className="Usrname">
                <p>Şifre</p>
            </div>
            <div className="Usrnbx">
             <form><input type="password" className="uname" onChange={(e)=>handlepasswordChange(e.target.value)}/></form>
            </div>
            <div>
                <form><button className='Usradd' onClick={() => handleLogin()}>
       giriş
  </button></form>

            </div>
           
            </div>
            
            
        </div>
        </Fragment>
    )

    
}

export default UJBox;