import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useRouter } from "next/router";

import loginValidation from "../../utils/formValidationSchema/loginValidation";
import AuthLoader from "../Loaders/AuthLoader";
import ConnexionError from "../Landing/ConnexionStatus/ConnexionError";
import ConnexionSuccess from "../Landing/ConnexionStatus/ConnexionSuccess";

function Login({ setShowConnexionPopUp, setShowLogin, setShowRegister }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const handleForm = async (input) => {
    setLoading(true);
    setError("");

    const res = await axios.post(`http://localhost:3000/api/auth/login`, {
      email: input.email,
      password: input.password,
    });

    const connexionStatus = await res.data.status;

    console.log(connexionStatus);

    if (connexionStatus === "Error") {
      console.log("something went wrong during the connexion");
      setError("Email or password is incorrect");
      setLoading(false);
    }

    if (connexionStatus === "Success") {
      console.log("you're connected");
      setData("Successfull connexion !");
      setLoading(false);
      router.push("/catalog?genre=Trending");
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-black/75 z-10">
      {error && <ConnexionError message={error} />}

      {data && <ConnexionSuccess message={data} />}

      <form
        className="bg-white p-10 relative"
        onSubmit={handleSubmit(handleForm)}
      >
        <CloseIcon
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => setShowConnexionPopUp(false)}
        />
        <div className="flex flex-col gap-y-6">
          <h3 className="font-bold text-2xl">Log In</h3>
          <div>
            <label
              htmlFor="email"
              className="uppercase text-sm font-bold text-[#838383] block mb-2"
            >
              Email
            </label>
            <Controller
              control={control}
              name="email"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <div>
                  <input
                    type="email"
                    value={value || ""}
                    id="email"
                    className="px-3 py-1 border border-black outline-0 rounded w-full sm:w-80 sm:h-12"
                    onChange={onChange}
                  />
                  {/* error message if error */}
                  {!!error && (
                    <p className="text-red-500 text-xs">{error?.message}</p>
                  )}
                </div>
              )}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="uppercase text-sm font-bold text-[#838383] block mb-2"
            >
              Password
            </label>

            <Controller
              control={control}
              name="password"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <div>
                  <input
                    type="password"
                    value={value || ""}
                    id="password"
                    className="px-3 py-1 border border-black outline-0 rounded w-full sm:w-80 sm:h-12"
                    onChange={onChange}
                  />
                  {/* error message if error */}
                  {!!error && (
                    <p className="text-red-500 text-xs">{error?.message}</p>
                  )}
                </div>
              )}
            />
          </div>
          <p className="text-sm text-blue-500 cursor-pointer">
            Forgot your email or password?
          </p>
          <button
            type="submit"
            className="flex justify-center items-center h-[50px] uppercase text-white p-2 mb-[120px] bg-[#838383] rounded cursor-pointer"
          >
            {!loading ? <>Log In</> : <AuthLoader />}
          </button>
        </div>
        <p className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              setShowRegister(true);
              setShowLogin(false);
            }}
          >
            Register here
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
