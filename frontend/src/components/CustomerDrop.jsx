import { useState } from "react";
import Menu from "@material-ui/core/Menu";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { MenuItem } from "@mui/material";
import Styles from "../css/CustomerDrop.module.css"
const theme = createTheme({});
const CustomerDrop = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

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
          id="menubutton1"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301 }}
        >
          Customer Support
        </p>
        <Menu
          style={{marginTop:"40px"}}
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
          <div className={Styles.customerDrop} style={{}}>
                <div className={Styles.customerDropCont1}>
                    <h5 style={{marginLeft:"14%"}}>Contact Us</h5>
                    <div>
                    <MenuItem className={Styles.customerMenu} > <img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/chat-with-us.svg" alt="" /> Chat with us</MenuItem>
                    <MenuItem className={Styles.customerMenu} > <img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/email-us.svg" alt="" /> Email Us</MenuItem>
                    <MenuItem className={Styles.customerMenu} > <img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/ask-our-expert.svg" alt="" /> Ask our Experts</MenuItem>
                    </div>
                </div>
                <div>
                    <h5 style={{marginLeft:"14%"}}>Helpful Links</h5>
                    <div className={Styles.customerDropCont1}>
                    <MenuItem className={Styles.customerMenu} >Track your Order</MenuItem>
                    <MenuItem className={Styles.customerMenu} >Return policy </MenuItem>
                    <MenuItem className={Styles.customerMenu} >FAQs </MenuItem>
                    </div>
                </div>
            </div>
          <MenuItem style={{fontSize:"10px",paddingBottom:"0px"}} >For Supports & Order Enquiries </MenuItem>
          <MenuItem style={{fontSize:"20px",paddingBottom:"0px",paddingTop:"0px"}}>Call us at : 0124-4616444 </MenuItem>
          <MenuItem style={{fontSize:"10px",paddingTop:"0px"}}>10 AM to 7 PM </MenuItem>
        </Menu>
      </ThemeProvider>
    </div>
  );
};

export default CustomerDrop;
