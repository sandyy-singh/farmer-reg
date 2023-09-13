
import SignUp from "./components/loginSignup/SignUp";
import Login from "./components/loginSignup/Login";
import ResetPassword from "./components/loginSignup/ResetPassword";
import Contact from "./components/loginSignup/Contact";
import FarmerOnBoardinng from "./components/loginSignup/FarmerOnBoardinng";
import FarmerData1 from "./components/loginSignup/FarmerData1";


import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {




  
  return (
    <div className=" app">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login />}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/signup" element={<SignUp />}></Route>
         <Route path="/ResetPassword" element={<ResetPassword />}></Route>
         <Route path="/FarmerOnBoardinng" element={<FarmerOnBoardinng />}></Route>
         <Route path="/Contact" element={<Contact />}></Route>
         <Route path="/FarmerData1" element={<FarmerData1 />}></Route>
   
         
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App 











