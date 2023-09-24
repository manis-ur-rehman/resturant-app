import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

export interface loginSchema {
  email: string;
  password: string;
}

export const loginValues: loginSchema = { email: "", password: "" };
