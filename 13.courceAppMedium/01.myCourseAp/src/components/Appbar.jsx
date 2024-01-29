import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Button from "@mui/material/Button";

function Appbar() {
  const [userEmail, setUserEmail] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/profile/me", {
      method: "GET",
      headers: { authorization: "bearer " + localStorage.getItem("JwtToken") },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.username) {
          setUserEmail(data.username);
        }
        console.log(data);
      });
  }, []);
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
          <div style={{ display: "flex" }}>
            <div>
              {" "}
              <Typography style={{ color: "white" }}>{userEmail}</Typography>
            </div>
            <div style={{ marginRight: "2px",marginLeft:"20px" }}>
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
