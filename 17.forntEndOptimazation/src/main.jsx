import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  Recoil from './Recoil.jsx'
import Chuck from './Chuck.jsx'
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <div style={{
    display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px"
  }}>
      <App />
      <Chuck />


  </div>
    </>
);
