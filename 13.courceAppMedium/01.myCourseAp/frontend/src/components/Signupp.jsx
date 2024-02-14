import Button from "@mui/material/Button";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import url from "../assets/url";
import { userEmailState } from "../store/selectors/username";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atom/admin";
import { z } from "zod";

function Signup() {
  let navigate = useNavigate();
  const setUserState = useSetRecoilState(userState);
  if (userEmailState) {
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
              Welcome To Coursera Signup Below
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
                onChange={(i) => {
                  setusername(i.target.value);
                }}
                label="Email"
                variant="outlined"
                fullWidth={true}
              />
              <br />
              <br />
              <TextField
                onChange={(i) => {
                  setpassword(i.target.value);
                }}
                fullWidth={true}
                label="Password"
                variant="outlined"
                type="password"
              />
              <br />
              <br />
              <Button
                variant="contained"
                onClick={() => {
                  let titleInputProps = z.object({
                    username: z.string().min(1).email(),
                    password: z.string().min(6),
                  });
                  const parsedInput = titleInputProps.safeParse({
                    username,
                    password,
                  });
                  if (parsedInput.success) {
                    setusername(parsedInput.data.username);
                    setpassword(parsedInput.data.password);

                    fetch(`${url}/admin/signup`, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ username, password }),
                    })
                      .then((res) => {
                        if (res.statusCode === 200) {
                        }
                        return res.json();
                      })
                      .then((data) => {
                        alert(data.message);
                        if (data.token) {
                          setUserState({
                            isLoading: false,
                            userMail: username,
                          });
                          setTimeout(() => {
                            navigate("/");
                          }, 500);
                          localStorage.setItem("JwtToken", data.token);
                        }
                      });
                  } else {
                    alert(
                      parsedInput.error.errors[0].message
                    );
                  }
                }}
              >
                Signup
              </Button>

              <br />
              <br />
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
