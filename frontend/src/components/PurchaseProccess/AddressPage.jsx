import React, { useState } from "react";
import style from "../../css/addresspage.module.css";
import { useDispatch, useSelector } from "react-redux";
import AddressBox from "./AddressBox";
import PropTypes from "prop-types";
import clsx from "clsx";
import TextField from "@mui/material/TextField";
import  { v4 } from "uuid"
import { add_address } from "../../redux/Address/address.actions";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const init = {
  name : "",
  mobile : "",
  address : "",
  pincode : ""
}

function AddressPage() {
  const BackdropUnstyled = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return (
      <div
        className={clsx({ "MuiBackdrop-open": open }, className)}
        ref={ref}
        {...other}
      />
    );
  });

  BackdropUnstyled.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
  };

  const [openModel, setOpenModel] = useState(false)
  const addresses = useSelector((state) => state.address.addresses);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [details, setDetails] = useState(init);

  const handleDetils = (e) => {
    const { name, value } = e.currentTarget
    setDetails({...details, [name] : value})
  }




  return (

    <>
    <div className={openModel ? style.blueback : style.background}>
    <div className={style.maxScreenNav}>
          <div className={style.navMain}>
            <img onClick={() => navigate("/")}
              src="https://i.ibb.co/NWKgftw/Screenshot-13.png"
              alt="logo"
              height={"60px"}
            />
            <div className={style.process}>
              <img
                src="https://i.ibb.co/hHt7ppH/icons8-check-circle-50.png"
                alt="currentPage"
                height={"20px"}
              />
              <p>CART</p>
              <hr className={style.hrLine} />

              <img
                src="https://i.ibb.co/hHt7ppH/icons8-check-circle-50.png"
                alt="currentPage"
                height={"20px"}
              />
              <p>ADDRESS</p>
              <hr className={style.hrLine} />

              <img
                src="https://i.ibb.co/hHt7ppH/icons8-check-circle-50.png"
                alt="currentPage"
                height={"20px"}
              />
              <p>PAYMENT</p>
            </div>
          </div>
        </div>

        <div className={style.navforsmaller}>
          <div className={style.navfirstLine}>
            <div className={style.cartleftNav}>
              <AiOutlineArrowLeft onClick={() => navigate("/cart")} />
              <p>Address</p>
            </div>
          </div>
          <div className={style.navsecline}>
            <div className={style.mobileprocess}>
              <img
                src="https://i.ibb.co/hHt7ppH/icons8-check-circle-50.png"
                alt="currentPage"
                height={"20px"}
              />
              <p>CART</p>
              <hr className={style.hrLine} />

              <img
                src="https://i.ibb.co/hHt7ppH/icons8-check-circle-50.png"
                alt="currentPage"
                height={"20px"}
              />
              <p>ADDRESS</p>
              <hr className={style.hrLine} />

              <img
                src="https://i.ibb.co/hHt7ppH/icons8-check-circle-50.png"
                alt="currentPage"
                height={"20px"}
              />
              <p>PAYMENT</p>
            </div>
          </div>
        </div>

      <div className={style.mainDivAddrs}>
        <div className={style.firstaddressline}>
          <p>Your Addresses ({addresses.length})</p>
          <p onClick={() => setOpenModel(true) }>+ ADD NEW ADDRESS</p>
        </div>
        <p className={style.updatemsgsmall} >Your order updates & invoice will be sent to</p>
        <div className={style.emailupdateDiv}>
          <p>Your order updates & invoice will be sent to</p>
          <div className={style.emailUpdateadd}>
            <img
              src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/btn_Email.svg"
              alt=""
            />
            <p>profileofchetan123@gmail.com</p>
            <button>Change</button>
          </div>
        </div>
        <div className={style.boxofaddress} >
          {addresses.map((x) => {
            return <div key={x.id} ><AddressBox x={x} /></div>;
          })}
        </div>
      </div>

    </div>

<div className={openModel ? style.modelshow : style.modelhide} >
<div className={style.addaddressdiv}>
    <p>Add New Address</p>
    <img onClick={() => setOpenModel(false)}
      src="https://i.ibb.co/MRQD2MV/icons8-cancel-64-1.png"
      alt="cancelmodel"
      height={"17px"}
    />
  </div>
  <div className={style.mainAddressDix} >
    <div className={style.inputaddress}>
      <TextField
        className={style.namein}
        id="standard-multiline-flexible"
        label="Name"
        multiline
        // value={init.name}
        name="name"
        onChange={handleDetils}
        maxRows={4}
        variant="standard"
      />
      <div className={style.twoNumDiv}>
        <TextField
          className={style.mobilein}
          id="standard-multiline-flexible"
          label="Mobile No."
          multiline
          name="mobile"
          onChange={handleDetils}
          maxRows={4}
          variant="standard"
        />
        <TextField
          className={style.altmobilein}
          id="standard-multiline-flexible"
          label="Alternate No."
          multiline
          maxRows={4}
          variant="standard"
        />
      </div>
      <TextField
        className={style.addressin}
        id="standard-multiline-flexible"
        label="Address"
        multiline
        name="address"
          onChange={handleDetils}
        maxRows={4}
        variant="standard"
      />
      <div className={style.getmylcoation}>
        <img
          src="https://i.ibb.co/WBQHKwJ/icons8-location-50-1.png"
          alt=""
          height={"20px"}
        />
        <p>Get my Location</p>
      </div>

      <div className={style.landpincodediv}>
        <TextField
          className={style.landin}
          id="standard-multiline-flexible"
          label="Landmark"
          multiline
          maxRows={4}
          variant="standard"
        />
        <TextField
          className={style.pincodein}
          id="standard-multiline-flexible"
          label="Pincode"
          multiline
          name="pincode"
          onChange={handleDetils}
          maxRows={4}
          variant="standard"
        />
      </div>
    </div>
    <button onClick={() => {
      dispatch(add_address({...details, id : v4()}))
      setOpenModel(false)
    }} className={style.savedelbtn} >Save & Deliver</button>
  </div>
</div>

</>
   
  );
}

export default AddressPage;
