import React from "react";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = (props) => {
  let { navigate } = props;

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const header = { "Access-Control-Allow-Origin": "*" };

  function notifySucessfull() {
    toast.success(
      " User Registered Successfully.",
      {
        position: toast.POSITION.TOP_LEFT,
      },
      { autoClose: 2000 }
    );
  }

  function notifywarning() {
    toast.warning(
      "Field can't be empty.",
      {
        position: toast.POSITION.TOP_LEFT,
      },
      { autoClose: 2000 }
    );
  }

  function notifyPasswordLength() {
    toast.warning(
      "Password Length too Short!",
      {
        position: toast.POSITION.TOP_LEFT,
      },
      { autoClose: 2000 }
    );
  }

  function notifyRegisteredAlredy() {
    toast.warn(
      " User Registered Alredy ! ",
      {
        position: toast.POSITION.TOP_LEFT,
      },
      { autoClose: 2000 }
    );
  }

  function signUpHandler(e) {
    e.preventDefault();

    let userCredentials = {
      username,
      email,
      password,
    };

    setEmail(userCredentials.email);
    setUserName(userCredentials.username);
    setPassword(userCredentials.password);

    if (email === "" || username === "" || password === "") {
      notifywarning();
    } else if (password.length <= 6) {
      notifyPasswordLength();
    } else {
      setUserName("");
      setEmail("");
      setPassword("");

        fetchdata();

    




    }
  }

  //register the user
  function register() {
    try {
      axios.post(
        "https://651d0d3344e393af2d591290.mockapi.io/user-authentication",
        {
          email: email,
          password: password,
          username: username,
        },
        header
      );
    } catch (e) {
       alert(console.error);
    }
  }

  //fetch users data from mockapi
  async function fetchdata() {

    


    let apiResult = await axios(
      `https://651d0d3344e393af2d591290.mockapi.io/user-authentication`
    ).catch(error=>{

      alert(error)
       navigate('/signup')

   })



    let allUserData = [];

    allUserData = apiResult.data;
    let userArray = filter(allUserData);
    if (userArray.length === 0) {
      register();
      notifySucessfull();
      navigate("/");
    } else {
      notifyRegisteredAlredy();
    }



    




  }

  //check user is alredy registered or not.
  function filter(userdata) {
    let Userdata = userdata.filter(function (mockapi) {
      const User = mockapi.email === email && mockapi.password === password;

      return User;
    });

    return Userdata;
  }

  return (
    <section className="overflow-hidden h-[100vh] flex flex-col justify-center items-center">
      <section
        aria-label="signin form"
        className="flex flex-col justify-center items-center gap-3 bg-violet-500  text-black h-[70vh] w-[90%] lg:w-[50vw] rounded-lg  "
      >
        <h1 className="text-2xl">
          <span className="text-3xl font-semibold">SignUp </span> to NewsBreak
        </h1>

        <form onSubmit={signUpHandler}>
          <section className=" flex flex-col justify-evenly items-center gap-3">
            <section aria-label="input field for username">
              <label> Username </label> <br />
              <input
                className="border rounded-md h-10 w-80 text-black p-5 focus:outline-gray-700"
                type="text"
                data-testid="text"
                placeholder="usename"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                required
                value={username}
              />
            </section>

            <section aria-label="input field for email">
              <label> Email </label> <br />
              <input
                className="border rounded-md h-10 w-80 text-black p-5 focus:outline-gray-700"
                type="email"
                data-testid="email"
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
                className="border rounded-md h-10 w-80 text-black p-5  focus:outline-gray-700"
                data-testid="password"
                type="password"
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                value={password}
              />
            </section>

            <section>
              <button
                aria-label="signup button"
                className="bg-black px-10 text-white py-2 rounded-full"
                
              >
                Sign Up
              </button>
              <ToastContainer />
            </section>

            <section>
              Already have an account?
              <a href="/" className="underline">
                Sign In
              </a>
            </section>
          </section>
        </form>
      </section>
    </section>
  );
};

export default Signup;
