import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email().required("email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

export interface signupSchema {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signUpValues: signupSchema = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
