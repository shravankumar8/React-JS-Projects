import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Button from "@mui/material/Button";

function Appbar() {
 let navigate = useNavigate();
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
                navigate("/signup")
              }}
              variant="contained"
            >
              Signup
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                navigate("/signin")
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
