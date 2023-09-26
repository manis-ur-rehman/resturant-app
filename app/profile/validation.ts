import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email().required("email is required"),
});

export interface ProfileSchema {
  firstName: string;
  lastName: string;
  email: string;
}

export const profileValues: ProfileSchema = {
  firstName: "",
  lastName: "",
  email: "",
};
