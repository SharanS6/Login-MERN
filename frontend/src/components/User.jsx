import { Link, useLocation, useNavigate } from "react-router-dom";
import "./userstyle.css"
import userimg from "../asserts/userimg.gif"

function User() {

    const navigate=useNavigate();
    const { state } = useLocation();
    console.log(state)

   function handlelogout(){
    navigate("/")
    }
    return (<>

        <div className="user">

            <div className="user-box">
                <div className="user-name">
                    <img  src={userimg} alt="" />

                    <h1>{state.name} {state.lname}</h1>
                    <h2>Developer</h2>
                </div>
                <div className="user-details">
                    <h1>Information</h1>

                    <h3>Email: {state.email}</h3>
                    <h3>Phone No: +91 6312312312</h3>

                    <button onClick={()=>{handlelogout()}}>LOG OUT</button>
                </div>
            </div>
        </div>

    </>)
}

export default User