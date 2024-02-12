
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Login from "./components/login"
import Signup from "./components/signup"
import User from "./components/User"

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route  path='/' element={<Login></Login>}></Route>
    <Route  path='/Signup' element={<Signup></Signup>}></Route>
    <Route path='/User' element={<User></User>}></Route>
    {/* <Route  path='*' element={<NoPage></NoPage>}></Route> */}
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
