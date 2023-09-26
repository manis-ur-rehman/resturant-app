"use client";

import { Form, Formik } from "formik";
import {
  signUpValues,
  signupSchema,
  validationSchema,
} from "@signup/validation";
import Input from "@components/input";
import Button from "@components/button";
import AuthLayout from "@components/authlayout";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import UseAuthCheckHook from "@hooks/useauthcheckhook";

const SignUp = () => {
  const router = useRouter();
  const { loading, setLoading } = UseAuthCheckHook();
  const handleSignUp = async (
    setSubmitting: (isSubmitting: boolean) => void,
    values: signupSchema
  ) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", requestOptions);
      const data = await res.json();
      router.push("/login");
    } catch (error) {
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <AuthLayout title="Sign Up" description="If you have already an account? ">
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
    </AuthLayout>
  );
};

export default SignUp;
