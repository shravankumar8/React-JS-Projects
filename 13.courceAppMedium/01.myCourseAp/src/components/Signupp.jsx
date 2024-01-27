import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Signup() {
  return (
    <>
      <div>
        <center>
          <div
            style={{
              paddingTop: "140px",
              marginBottom: "10px",
            }}
            >
            welcome to Coursera
          </div>
        </center>
        <center>
          <Card varint={"outlined"}style={{width:400,padding:40}}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth="true"
              />
            <br />
            <br />
            <TextField
              fullWidth="true"
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <br />
            <br />
            <Button variant="contained">Signup</Button>

            <br />
            <br />
          </Card>
        </center>
      </div>
    </>
  );
}

export default Signup;
