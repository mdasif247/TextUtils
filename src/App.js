
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About.js';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const[mode,setmode]=useState('light');
  const[alert,setAlert]=useState(null);

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor="black"
      document.body.style.color="white"
      showAlert("Dark mode enabled","success")
      document.title="TextUtils-(Dark Mode)"
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert("Light mode enabled","success")
      document.title="TextUtils-Home"
    }
  }
   
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000);
  }
  return (
    <>
   <Router>
   <Navbar title="TextUtils" about="About " mode={mode} togglemode={togglemode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
        <  Routes>
          <Route path="/about" element={<About className="container my-3"/>}/>
          <Route path="/" element={<Textarea heading="Enter the text below to analyze" showAlert={showAlert}/>}/>
        </Routes>
   </div>
   </Router>
   </>
  );
}

export default App;
