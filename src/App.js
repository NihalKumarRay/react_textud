import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes, // Importing Routes for React Router v6
} from "react-router-dom";

function App() {
  const [mode , setMode]= useState('light');
  const [alert , setAlert]= useState(null);

  // Function to show alerts
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "textUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success");
      document.title = "textUtils - Light Mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="textut" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes> {/* Using Routes for React Router v6 */}
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
