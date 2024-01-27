import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
// import Button from "@mui/material/Button";

function Appbar() {
  return (
    <>
      <div>
        <div>
          <Typography style={{ color: "white" }}>coursera</Typography>
        </div>
        <div>
          <Button>SignUp</Button>
          <Button>SignIn</Button>
        </div>
      </div>
    </>
  );
}
export default Appbar;
