import React, { useEffect, useRef } from "react";

import { useDataLayerValue } from "../context/DataLayer";
import { ACTIONS } from "../context/ReducerEvents";
import { navigate } from "@reach/router";
import { useInputValue } from "../hooks/useInputValue";
import Logo from "../assets/logo.svg";

function Login() {
  const [{ name }, dispatch] = useDataLayerValue();
  const nameInput = useInputValue("");
  const nameRef = useRef("");

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (nameInput.value === "") {
      alert("Enter name");
      return 0;
    }
    dispatch(ACTIONS.login(nameInput.value));
    navigate("/questionary");
  };

  return (
    <div className="flex flex-col w-3/4 sm:w-1/2 m-auto p-6 box-container">
      <img src={Logo} alt="logo" className="max-w-md w-full mx-auto"></img>
      <form
        className="flex flex-col gap-4 items-center"
        onSubmit={onSubmitHandler}
      >
        <div className="w-full text-center mt-4">
          <input
            type="text"
            id="inputName"
            ref={nameRef}
            {...nameInput}
            className="w-full sm:w-3/4 px-2 py-1 border-2 text-center placeholder-gray-500 border-gray-400 hover:border-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            placeholder="Enter your name ..."
          ></input>
        </div>
        <div className="w-full">
          <p className="w-full text-center font-semibold">
            Hello {nameInput.value} 😀
          </p>
        </div>
        <div className="w-full text-center">
          <button
            type="submit"
            className="w-full sm:w-auto py-2 px-8 text-primary-50 font-semibold cursor-pointer focus:border-transparent focus:outline-none focus:ring-4 focus:ring-primary-300 bg-primary-600 hover:bg-primary-500"
          >
            START
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
