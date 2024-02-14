import Button from "@mui/material/Button";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import url from "../assets/url";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atom/admin";
import { z } from "zod";
function Signin() {
  const setUserState = useSetRecoilState(userState);

  let navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
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
                let titleInputProps = z.object({
                  username: z.string().min(6).email(),
                  password: z.string().min(6),
                });
                const parsedInput = titleInputProps.safeParse({
                  username,
                  password,
                });
                if (parsedInput.success) {
                  setusername(parsedInput.data.username);
                  setpassword(parsedInput.data.password);
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
                      if (data.token === undefined) {
                        alert("username not found /credentials dont match");
                        return console.log("USername not found");
                      } else {
                        setUserState({
                          isLoading: false,
                          userMail: username,
                        });
                        localStorage.setItem("JwtToken", data.token);
                        navigate("/");
                      }
                    });
                }else{

                  alert("error "+ parsedInput.error.errors[0].message);

                }

                
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
