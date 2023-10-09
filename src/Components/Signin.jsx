import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Signin = (props) => {
  let { navigate } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function notify() {
    toast.error(
      "User Not Registered or Wrong Password !",
      {
        position: toast.POSITION.TOP_LEFT,
      },
      { autoClose: 2000 }
    );
  }

  function handelLoginEvent(e) {
    e.preventDefault();

    console.log(email);
    console.log(password);

    setEmail("");
    setPassword("");
    fetchdata();
  }

  async function fetchdata() {
    let apiResult = await axios(
      `https://651d0d3344e393af2d591290.mockapi.io/user-authentication`
    );

    let allUserData = [];

    allUserData = apiResult.data;

    let userArray = filterr(allUserData);

    if (userArray.length === 0) {
      notify();
    } else {
      navigate("/home");
      localStorage.setItem("username", userArray[0].username);
    }
  }

  function filterr(data) {
    let Userdata = data.filter(function (mockapi) {
      const User = mockapi.email === email && mockapi.password === password;

      return User;
    });

    return Userdata;
  }

  return (
    <div className="overflow-hidden h-[100vh] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5  bg-violet-500  text-white  h-[70vh] w-[90%] lg:w-[50vw]  rounded-lg   ">
        <h1 className="text-2xl">
          <span className="text-3xl font-semibold">SignIn </span> to NewsBreak{" "}
        </h1>

        <form onSubmit={handelLoginEvent}>
          <section
            aria-label="signin form "
            className=" flex flex-col justify-evenly items-center gap-5"
          >
            <section aria-label="input field for email">
              <label> Email </label> <br />
              <input
                data-testid="email"
                className="border  rounded-md h-10 w-80 text-black p-5 focus:outline-gray-700"
                type="email"
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                value={email}
              />
            </section>

            <section aria-label="input field for password">
              <label> Password </label> <br />
              <input
                data-testid="password"
                className="border rounded-md h-10 w-80 text-black p-5  focus:outline-gray-700"
                type="password"
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                value={password}
              />
            </section>

            <section
              aria-label="sign in button"
              className="flex flex-row justify-evenly items-center"
            >
              <button className="bg-black px-10 py-2 rounded-full">
                <ToastContainer />
                Sign In
              </button>
            </section>

            <section
              aria-label="click on the signup link to register. "
              className="flex flex-row justify-center"
            >
              Don't have an account?
              <a
                aria-label=" signup link"
                href="/signup"
                className="underline"
                alt="sign-up-link"
              >
                Sign Up
              </a>
            </section>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Signin;
