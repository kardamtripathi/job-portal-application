import React, { useContext, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate, Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { MdOutlineMailOutline } from "react-icons/md";
import LoginImg from "../../assets/login.png";
import { BACKEND_URL } from "../../BackendUrl";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/user/forgotPassword`,
        { email },
        {
          withCredentials: true,
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response) {
        // console.log(response);
        if (response.data.Status === "Success") {
            toast.success(response.data.message);
            navigate('/login')
        }
      } else {
        toast.error(response.message);
      }
      setEmail("");
      setPassword("");
      setRole("");
    } catch (error) {
      toast.error(error.response.data.message || "An error occurred while logging in");
    }
  };
  return (
    <>
      <section className="authPage">
        <div className="container">
          <div className="header">
            <img src={Logo} alt="logo" />
            <h3>Forgot Password</h3>
          </div>
          <form>
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
            <button onClick={handleSubmit} type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="banner">
          <img src={LoginImg} alt="login" />
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
