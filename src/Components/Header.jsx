import React from "react";
import { FiUser, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Header = () => {
  
    const navigate = useNavigate();

  function logout() {
    navigate("/");
    localStorage.clear();
  }

  return (
    <header>
      <nav className="h-16  bg-violet-500 text-white font-bold text-2xl flex flex-row justify-between p-2 items-center">
        <section
          aria-label="name of user"
          className="flex flex-col gap-2 justify-center items-center  "
        >
          <FiUser className="" />
          <p className="text-xs">Hi,{localStorage.getItem("username")}</p>
        </section>

        <section aria-label=" heading NewsBreak">
          <h3> NewsBreak </h3>
        </section>

        <section className="flex flex-col ">
          <button
            aria-label=" logout button"
            onClick={() => {
              logout();
            }}
          >
            <span className="h-9   bg-black text-xs text-white p-2 rounded-md flex flex-row justify-center items-center">
              <FiLogOut /> logout
            </span>
          </button>
        </section>
      </nav>
    </header>
  );
};

export default Header;
