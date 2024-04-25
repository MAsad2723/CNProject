"use client";
import React, { useState } from "react";
// import postData from "../../utils/postData";
// import { useNavigate } from "react-router-dom";

function LoginPage(props:any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const url = "http://localhost:5000/login";
//   const navigate = useNavigate();

  // Handle Login
  const handleLogin = (e:any) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    console.log(user)

    //implement postdata to server and navigate upon success
  };

  // rendered Component
  return (
    <div>
      <h2 className="mt-6 text-center text-2xl sm:text-3xl text-white font-extrabold ">
        Log In
      </h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block p-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="w-full px-4 py-3 shadow-lg rounded-[20px] focus:ring-[0.5px] outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block p-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Your password"
            className="w-full px-4 py-3 shadow-lg rounded-[20px] focus:ring-[0.5px]  outline-none "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-indigo-900 shadow-lg text-indigo-100 mb-4 py-3 px-4 rounded-[20px] hover:bg-indigo-800 focus:outline-none hover:scale-105 transition ease-in-out "
          >
            Log In
          </button>

          <button
            onClick={() => props.func("signup_not")}
            className="w-full outline outline-1 outline-offset-0 outline-indigo-300 shadow-lg py-3 px-4 rounded-[20px] hover:bg-indigo-800 text-white hover:outline-none  "
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
