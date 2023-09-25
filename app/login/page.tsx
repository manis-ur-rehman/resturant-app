"use client";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import { loginSchema, loginValues, validationSchema } from "@login/validation";
import Input from "@components/input";
import Button from "@components/button";
import AuthLayout from "@components/authlayout";
import { useEffect, useState } from "react";
import Loading from "@login/loading";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const handleLogin = (
    setSubmitting: (isSubmitting: boolean) => void,
    values: loginSchema
  ) => {
    setLoading(true);
    fetch("/api/auth/login")
      .then((res) => res.json())
      .then((data) => {
        alert(data);
        setSubmitting(false);
        setLoading(false);
        router.push("/dashboard");
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    (function () {
      setLoading(true);
      fetch("/api/auth")
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data.authStatus) {
            router.push("/dashboard");
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    })();
  }, []);
  if (loading) {
    return <Loading />;
  }
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
