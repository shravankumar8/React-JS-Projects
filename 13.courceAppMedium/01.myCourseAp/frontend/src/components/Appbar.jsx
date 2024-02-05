import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import url from "../assets/url";
import { useRecoilValue,useSetRecoilState } from "recoil";
import { userState } from "../../atom/admin";
import { userEmailState } from "../../selectors/username";
import { isLoadingState } from "../../selectors/isLoading";
// import Button from "@mui/material/Button";

function Appbar() {
const navigate = useNavigate()
const userEmail=useRecoilValue(userEmailState)
const userState1=useRecoilValue(userState);
const isLoading=useRecoilValue(isLoadingState)
  // Get the full URL including query parameters and hash
  
  
  // Get the path part of the URL (excluding domain, query parameters, and hash)
  // console.log(currentPath);
  console.log(userEmail);
  if (userEmail) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography style={{ color: "white" }}>coursera</Typography>
          </div>
          <Button
            onClick={() => {
              navigate("/courses");
            }}
            variant="contained"
          >
            courses
          </Button>
          <Button
            onClick={() => {
              navigate("/createcourse");
            }}
            variant="contained"
          >
            create course
          </Button>
          <div style={{ display: "flex" }}>
            <div>
              {" "}
              <Typography style={{ color: "white" }}>{userEmail}</Typography>
            </div>
            <div style={{ marginRight: "2px", marginLeft: "20px" }}>
              <Button
                onClick={() => {
                  localStorage.setItem("JwtToken", null);
                  navigate("/signup");
                }}
                variant="contained"
              >
                logout
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography style={{ color: "white" }}>coursera</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "2px" }}>
            <Button
              onClick={() => {
                navigate("/signup");
              }}
              variant="contained"
            >
              Signup
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                navigate("/signin");
              }}
              variant="contained"
            >
              Signin
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Appbar;
