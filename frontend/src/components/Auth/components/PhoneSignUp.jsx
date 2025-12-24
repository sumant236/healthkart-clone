import "react-phone-number-input/style.css";
// import { useNavigate } from "react-router-dom";
// import { useUserAuth } from "../context/UserAuthContext";
import { GoogleAuthLogin } from "./GoogleAuthLogin";
import Styles from "../../../css/LoginSignup/PhoneSignup.module.css";

export const PhoneSignUp = () => {
  // const [number, setNumber] = useState("");
  // const [otp, setOtp] = useState("");
  // const [error, setError] = useState("");
  // const [flag, setFlag] = useState(false);
  // const [confirmObj, setConfirmObj] = useState("");
  // const { setUpRecaptcha } = useUserAuth();
  // const navigate = useNavigate();

  // const getOtp = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   if (number === " " || number === undefined)
  //     return setError("Please enter a valid phone number");
  //   try {
  //     const response = await setUpRecaptcha(number);
  //     setConfirmObj(response);
  //     setFlag(true);
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  // const verifyOtp = async (e) => {
  //   e.preventDefault();
  //   if (otp === "" || otp === null) return;
  //   try {
  //     setError("");
  //     await confirmObj.confirm(otp);
  //     navigate("/content");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  return (
    <div>
      <div>
        {/* {error && <p>{error}</p>} */}
        {/* <form onSubmit={getOtp} style={{display:!flag?"block":"none"}} >
          <div  controlId="formBasicPhoneNumber">
            <PhoneInput
            defaultCountry='PH'
            value={number}
            onChange={(e)=>setNumber(e.target.value)}
            placeholder="Phone Number"
            />
            <div id="recaptcha-container"/>
          </div>
           <div className='button-right' >
                <Link to="/" ><Button varient="secondary">Cancel</Button></Link>
                <Button varient="primart" type="submit" >sendOtp</Button>
           </div>
          </form> */}

        {/* <form onSubmit={verifyOtp} style={{display:flag?"block":"none"}} >
          <div  controlId="formBasicotp">
           <input
               type="text"
               placeholder="Otp"
               onChange={(e)=>setOtp(e.target.value)}
           />
          </div>
           <div  >
                <Link to="/home" ><button >Cancel</button></Link>
                <button  type="submit" >VerifyOtp</button>
           </div>
          </form> */}
        <div style={{ margin: "2px", width: "300px" }}>
          <p style={{ padding: "5px", fontSize: "12px" }}>Mobile Number</p>
          <input
            style={{ padding: "5px", margin: "5px", width: "250px" }}
            type="number"
            placeholder="Enter 10 digit no."
          />
          <button
            style={{
              border: "0px",
              fontSize: "15px",
              margin: "5px",
              borderRadius: "5px",
              padding: "5px",
              color: "white",
              width: "250px",
              backgroundColor: "#00aeae",
            }}
          >
            Login via OTP
          </button>
        </div>
        <hr />
      </div>
      <div className={Styles.gouth}>
        <GoogleAuthLogin />
      </div>
    </div>
  );
};
