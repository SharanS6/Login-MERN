import { createContext, useEffect, useState } from "react"
import axios from "axios";


const ContextData=createContext()
function ServiceProvider(data){

const [nuser,setuser]=useState({fname:" ",lname:" ",email:" ",pw:" "})
// [{fname:"Raja",lname:"S",email:"123@gmail.com",pw:"123"}]







return(
<ContextData.Provider value={{nuser,setuser}}>
    {data.children}
</ContextData.Provider>
)
}

export default ServiceProvider
export {ContextData}