import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

function Signin() {
  return (
    <>
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
            <Button variant="contained">Signin</Button>

            <br />
            <br />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Signin;
