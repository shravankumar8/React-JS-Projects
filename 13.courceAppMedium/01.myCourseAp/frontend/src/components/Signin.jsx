import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
 import Appbar from "./Appbar";
import { useState } from "react";

import url from "../assets/url";
 function Signin() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
   return (
     <>
       <Appbar />
       <div>
         <div
           style={{
             display: "flex",
             justifyContent: "center",
             paddingTop: "140px",
             marginBottom: "10px",
             color: "white",
             // text,
           }}
         >
           <Typography
             style={{
               fontSize: "20px",
             }}
           >
             Welcome Back Signin Below
           </Typography>
         </div>
         <div
           style={{
             display: "flex",
             justifyContent: "center",
           }}
         >
           <Card varint={"outlined"} style={{ width: 400, padding: 40 }}>
             <TextField
               onChange={(e) => {
                 setusername(e.target.value);
               }}
               id="outlined-basic"
               label="Email"
               variant="outlined"
               fullWidth={true}
             />
             <br />
             <br />
             <TextField
               onChange={(e) => {
                 setpassword(e.target.value);
               }}
               fullWidth={true}
               id="outlined-basic"
               label="Password"
               variant="outlined"
             />
             <br />
             <br />
             <Button
               onClick={() => {
                 fetch(`${url}/admin/login`, {
                   method: "POST",
                   headers: {
                     "Content-Type": "application/json",
                     username: username,
                     password: password,
                   },
                 })
                   .then((res) => {
                     if (res.statusCode === 200) {
                     }
                     return res.json();
                   })
                   .then((data) => {
                     console.log(data.token);
                     localStorage.setItem("JWDAuthToken", data.token);
                   });
               }}
               variant="contained"
             >
               Signin
             </Button>

             <br />
             <br />
           </Card>
         </div>
       </div>
     </>
   );
}

export default Signin;
