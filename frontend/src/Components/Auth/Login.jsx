import React, { useContext, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate, Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import LoginImg from "../../assets/login.png";
import { BACKEND_URL } from "../../BackendUrl";
import { CircularProgress } from "@mui/material";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [OTPFlag, setOTPFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState("");
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `${BACKEND_URL}/api/user/login`,
        { email, password, role },
        {
          withCredentials: true,
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response && response.data) {
        // console.log(response.data);
        if (response.data.status === "Pending") {
          setOTPFlag(true);
          setUserId(response.data.data.userId);
          setRegisteredEmail(response.data.data.email);
        } else {
          setIsAuthorized(true);
        }
        toast.success(response.data.message);
        setLoading(false);
      }
      else {
        toast.error("Unexpected response from server");
        setLoading(false);
      }
      setEmail("");
      setPassword("");
      setRole("");
    } catch (error) {
      toast.error(error.response.data.message || "An error occurred while logging in");
      setLoading(false);
    }
  };
  const handleOTP = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${BACKEND_URL}/api/user/verifyOTP`,
        { userId, otp },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      setIsAuthorized(true);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  const resendOTP = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${BACKEND_URL}/api/user/resendOTP`,
        { userId, email: registeredEmail },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };
  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      {OTPFlag === false ? (
        <>
          <section className="authPage">
            <div className="container">
              <div className="header">
                <img src={Logo} alt="logo" />
                <h3>Login</h3>
              </div>
              <form>
                <div className="inputTag">
                  <label>Login As</label>
                  <div>
                    <FaRegUser />
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Select Role</option>
                      <option value="Employer">Employer</option>
                      <option value="Job Seeker">Job Seeker</option>
                    </select>
                  </div>
                </div>
                <div className="inputTag">
                  <label>Email</label>
                  <div>
                    <MdOutlineMailOutline />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div className="inputTag">
                  <label>Password</label>
                  <div>
                    <RiLock2Fill />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Your Password"
                    />
                  </div>
                <Link to={"/forgotPassword"} id="forgotPassword">Forgot Password?</Link>
                </div>
                {
                  loading ? <div className="loaderContainer">
                    <CircularProgress />
                  </div> 
                  : 
                  <button onClick={handleLogin} type="submit">
                    Login
                  </button>
                }
                <Link to={"/register"}>Register</Link>
              </form>
            </div>
            <div className="banner">
              <img src={LoginImg} alt="login" />
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="authPage">
            <div className="container">
              <div className="header">
                <img src={Logo} alt="logo" />
                <h3>Login</h3>
              </div>
              <form>
                <div className="inputTag">
                  <label>Enter OTP</label>
                  <div>
                    <MdOutlineMailOutline />
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter Your OTP"
                    />
                  </div>
                  <p>
                    <i>
                      Note: The OTP sent to your Email Id is only valid for{" "}
                      <b>5</b> minutes
                    </i>
                  </p>
                  </div>
                  {
                    loading ? 
                    <div className="loaderContainer">
                      <CircularProgress />
                    </div>
                    : 
                    <>
                      <button onClick={handleOTP} type="submit">
                        Verify
                      </button>
                      <button onClick={resendOTP} type="submit">
                        Resend OTP
                      </button>
                    </>
                  }
              </form>
            </div>
            <div className="banner">
              <img src={LoginImg} alt="login" />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Login;
