"use client";
import Link from "next/link";
import { Formik, Form } from "formik";
import { loginSchema, loginValues, validationSchema } from "@login/validation";
import Input from "@components/input";
import Button from "@components/button";
import AuthLayout from "@components/authlayout";

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
    <AuthLayout title="Login" description="Don't have an account? ">
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
    </AuthLayout>
  );
};

export default Login;
