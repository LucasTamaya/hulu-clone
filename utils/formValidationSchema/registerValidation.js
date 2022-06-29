import * as Yup from "yup";

const registerValidationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  username: Yup.string()
    .min(2, "Please enter a valid username")
    .required("Please enter your username"),
  password: Yup.string()
    .min(6, "This password is too short")
    .required("Please enter a password"),
}).required();

export default registerValidationSchema;
