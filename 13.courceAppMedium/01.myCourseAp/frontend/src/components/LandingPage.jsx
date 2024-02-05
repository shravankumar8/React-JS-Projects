import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container style={{ display: "flex", justifyContent:"center",padding: "5vw" }}>
        <Grid item xs={12} md={6} lg={7}>
          <div className="sodisollu" style={{ marginTop: "70px" }}>
            <Typography color={"white"} variant={"h2"}>
              coursera Admin
            </Typography>
            <Typography color={"white"} variant={"h5"}>
              a place to learn and earn and short live
            </Typography>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <div className="signupdiv" style={{ marginRight: "10px" }}>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  SignUp
                </Button>
              </div>
              <div className="signindiv" style={{ marginRight: "10px" }}>
                <Button
                  size={"large"}
                  variant={"contained"}
                  onClick={() => {
                    navigate("/singin");
                  }}
                >
                  Signin
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item style={{ alignItems: "center" }} xs={12} md={6} lg={5}>
          <div style={{ width: "40", marginTop: "50px" }}>
            <img
              style={{ maxInlineSize: "100%", blockSize: "auto," }}
              src="https://www.deadready.co.uk/wp-content/uploads/2023/03/Aspect-Ratio-Blog-Image-Updated.jpg"
              alt=""
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default LandingPage;
