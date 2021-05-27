import React, { useState } from "react";
function Signin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signin = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="login-container">
        <h1>Sign-in</h1>
        <form className="">
          <h5 align="left">E-mail</h5>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="inp"
            type="text"
          />
          <h5 align="left">Password</h5>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="inp"
            type="password"
          />
          <button type="submit" onClick={signin} className="login_signin-btn">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to our terms and conditions. Please see our
          privacy policy here.
        </p>
        <p>Not having account?</p>
        <button onClick={register} className="login_register-btn">
          Create your account
        </button>
      </div>
    </>
  );
}
export default Signin;
