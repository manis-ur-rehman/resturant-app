"use client";
import Link from "next/link";
import { Formik, Form } from "formik";
import { loginSchema, loginValues, validationSchema } from "@login/validation";
import Input from "@components/input";
import Button from "@components/button";

const Login = () => {
  const handleLogin = (
    setSubmitting: (isSubmitting: boolean) => void,
    values: loginSchema
  ) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
    console.log("values: ", values);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">Login</h1>
        <Formik
          initialValues={loginValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) =>
            handleLogin(setSubmitting, values)
          }
        >
          {({ isSubmitting }) => (
            <Form className="mt-6">
              <Input type="email" name="email" label="Email" />
              <Input type="password" name="password" label="Password" />
              <Button
                type="submit"
                disabled={isSubmitting}
                label="Login"
                parentClass="mt-2"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              />
            </Form>
          )}
        </Formik>
        <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
