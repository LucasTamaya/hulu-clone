import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import { loginValidationSchema } from "../../utils/formValidationSchema";

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  return (
    <form>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div>
            <input
              type="email"
              placeholder="Email"
              value={value || ""}
              className="px-3 py-1 m-2 border border-black sm:w-80 sm:h-12"
              onChange={onChange}
            />
            {/* si il y a une erreur dans le champs, on affiche le message correspondant à l'erreur */}
            {!!error && (
              <p className="text-red-500 text-sm ml-2">{error?.message}</p>
            )}
          </div>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div>
            <input
              type="password"
              placeholder="Password"
              value={value || ""}
              className="px-3 py-1 m-2 border border-black sm:w-80 sm:h-12"
              onChange={onChange}
            />
            {/* si il y a une erreur dans le champs, on affiche le message correspondant à l'erreur */}
            {!!error && (
              <p className="text-red-500 text-sm ml-2">{error?.message}</p>
            )}
          </div>
        )}
      />
    </form>
  );
}

export default Login;
