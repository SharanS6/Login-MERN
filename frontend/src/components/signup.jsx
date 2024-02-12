
import { Link, Navigate, useNavigate } from "react-router-dom"
import "./signupstyle.css"
import { useContext, useEffect, useState } from "react"
import { ContextData } from "../service/serviceProvider"
import axios from "axios"


function Signup() {

    const navigate=useNavigate(); 


    const { nuser, setuser} = useContext(ContextData)


    // const [enablesignup,setsignup]=useState(false)

    // const [storeuser, setstoreuser] = useState({
    //     fname:" ",lname:" ",email:" ",pw:" "})



        const handleChange = (e) => {
            const { name, value } = e.target;
            setuser({
              ...nuser,
              [name]: value
            });
          };

         async function handleSignup(){
            console.log(nuser)

         await   axios.post("http://localhost:5000/adduser",{newuser:nuser}).then(function(data){
                console.log(data)
                if(data.data==true){
                    navigate('/')
                }
                 if(data.data==false)
                 {
                    alert("Email exits already.Please try a new one")
                 }
               
            }).catch(function(error){
                console.log(error)
                
            })
          }
         
        


    
    return (<>
        <div className="signup-background">
            <div className="Signup-Container">
                <div className="signup-form">
                    <h1>SIGN UP</h1>
                    <div className="input-box_name">
                        <div className="input-box_first">
                            <input value={nuser.fname1}   name="fname" id="fname" type="text" onChange={handleChange}></input>
                            <br />
                            <label htmlFor="fname" >First Name</label>

                        </div>
                        <div className="input-box_last">
                            <input value={nuser.lname1} onChange={handleChange} name="lname" id="Lname" type="text"></input>
                            <br></br>
                            <label htmlFor="Lname" >Last Name</label>
                        </div>
                    </div>
                    <div className="input-box_email">
                        <input value={nuser.email1} onChange={handleChange} name="email" type="email" id="email"></input>
                        <br />

                        
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-box_pw">
                        <input value={nuser.pw1} onChange={handleChange} name="pw" type="password" id="pw"></input>
                        <br />
                        <label htmlFor="pw">Password</label>
                    </div>


             <button onClick={() => { handleSignup() }}>SIGN UP</button> 
                    <h3 style={{textAlign:"center"}}>Already have an account? click here <Link style={{textDecoration:"None",color:"blue"}} to={"/"}>Login</Link></h3> 
                    <p className="termsPolicy">Terms of use.Privacy policy</p>
                </div>

            </div>


        </div>
    </>)



    
}

export default Signup