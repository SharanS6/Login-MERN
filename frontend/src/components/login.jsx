import { Link, useNavigate } from "react-router-dom"
import Signup from "./signup"
import "./loginstyle.css"
import { FaUser, FaLock } from "react-icons/fa";

import { useContext, useState } from "react"
import { ContextData } from "../service/serviceProvider"
import axios from "axios";

function Login() {


    const [logincheck, setlogin] = useState(false)
    const [nemail, setnemail] = useState("")
    const [npw, setnpw] = useState("")
    const [retuser, retsetuser] = useState(" ")
    const navigate = useNavigate();



    function handleLogin() {


        axios.post("http://localhost:5000/userlist", { email: nemail, pw: npw }).then(function (data) {

            if (data.data.pw == npw) {
                navigate('/User', {
                    state: { name: data.data.fname, email: data.data.email, lname: data.data.lname },

                })
            }
            console.log(data.data)
            if (data.data == false) {
                alert("Login failed. Please check your credentials.")

            }
        }).catch(function (error) {
            console.log(error)
        })
    }

    return (<>
        <div className="Login-Wrapper">
            <div className="Login-Container">
                <div className="Login-Container_box">


                    <div className="input-box">
                        <h1>Login</h1>
                        <div className="input-box1">
                            <input value={nemail} onChange={(e) => { setnemail(e.target.value) }} id="email" type="email" placeholder="Email"></input>
                            <FaUser />

                        </div>
                        <br />

                        <div className="input-box1">
                            <input value={npw} onChange={(e) => { setnpw(e.target.value) }} id="password" type="password" placeholder="Password"></input>
                            <FaLock />
                        </div>

                        <br></br>
                        <button onClick={() => { handleLogin() }}>LOGIN</button>
                        <h4>Forget Password?</h4>
                        <p>Don't have an account? <span style={{ fontSize: "20px" }}><Link to={"/Signup"} className="signuplink">Signup here</Link></span></p>
                        <p>Terms of use.Privacy policy</p>
                    </div>
                </div>
            </div>



        </div>
    </>)
}

export default Login