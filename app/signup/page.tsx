"use client";

import { Form, Formik } from "formik";
import {
  signUpValues,
  signupSchema,
  validationSchema,
} from "@signup/validation";
import Input from "@components/input";
import Button from "@components/button";
import Link from "next/link";

const SignUp = () => {
  const handleSignUp = (
    setSubmitting: (isSubmitting: boolean) => void,
    values: signupSchema
  ) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
    console.log("values: ", values);
  };
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">
          Sign up
        </h1>
        <Formik
          initialValues={signUpValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) =>
            handleSignUp(setSubmitting, values)
          }
        >
          {({ isSubmitting }) => (
            <Form className="mt-6">
              <Input type="email" name="email" label="Email" />
              <Input type="text" name="firstName" label="First Name" />
              <Input type="text" name="lastName" label="Last Name" />
              <Input type="password" name="password" label="Password" />
              <Button
                type="submit"
                disabled={isSubmitting}
                label="Sign Up"
                parentClass="mt-2"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              />
            </Form>
          )}
        </Formik>
        <p className="mt-4 text-sm text-center text-gray-700">
          If you have already an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
