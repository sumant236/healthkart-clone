import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import LoginSIgnup from "../Auth/LoginSIgnup";
import Styles from "./AccountDropDown.module.css"
import { Link, useNavigate } from "react-router-dom";
import { MenuItem } from "@mui/material";
import { useUserAuth } from "../Auth/context/UserAuthContext";
const theme = createTheme({});
const AccountDrop = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    if (e.currentTarget.localName !== "ul") {
      const menu = document.getElementById("simple-menu").children[2];
      const menuBoundary = {
        left: menu.offsetLeft,
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
        right: menu.offsetLeft + menu.offsetHeight,
        bottom: menu.offsetTop + menu.offsetHeight
      };
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        return;
      }
    }

    setOpen(false);
  };

  theme.props = {
    MuiList: {
      onMouseLeave: (e) => {
        handleClose(e);
      }
    }
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <p
          id="menup1"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301,fontSize:"12px" }}
        >
          My Account & Order
        </p>
        <Menu
        className={Styles.drops}
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
            {
              user?"":<MenuItem><LoginSIgnup/></MenuItem>
            }
            <div className={Styles.dropContentCommon}>
            <div>
                <Link to="/profile" ><h5 style={{marginLeft:"16%"}}>Account</h5></Link>
                <div style={{borderRight:"1px solid grey"}}>
                <MenuItem style={{display:"flex",gap:"5px"}} > <img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/my-orders.svg" alt="" /> <span>Order</span></MenuItem>
                <MenuItem onClick={() => navigate("/wishlist")} style={{display:"flex",gap:"5px"}}><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/my-wishlist.svg" alt="" /> <span>Wishlist</span></MenuItem>
                <MenuItem style={{display:"flex",gap:"5px"}}><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/loyalty-rewards.svg" alt="" /><span> Rewards</span></MenuItem>
                </div>
            </div>
            <div>
                <h5>Health Profile</h5>
                <MenuItem>Diet plan</MenuItem>
                <MenuItem>My Consultans</MenuItem>
                <MenuItem>Recomandation</MenuItem>
            </div>
            </div>
            {
              user?<Button style={{width:"240px",border:"1px solid grey",margin:"5px 15px",color:"black",fontSize:"10px"}} onClick={handleLogout} >Logout</Button>:""
            }
        </Menu>
      </ThemeProvider>
    </div>
  );
};

export default AccountDrop;