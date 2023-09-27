"use client";

import { Form, Formik } from "formik";
import {
  signUpValues,
  SignupSchema,
  validationSchema,
} from "@signup/validation";
import Input from "@components/Input";
import Button from "@components/Button";
import AuthLayout from "@components/AuthLayout";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import axios from "axios";
import UseAuthCheckHook from "@hooks/UseAuthCheckHook";

const SignUp = () => {
  const router = useRouter();
  const { loading, setLoading } = UseAuthCheckHook({ statusReturn: false });
  const handleSignUp = async (
    setSubmitting: (isSubmitting: boolean) => void,
    values: SignupSchema
  ) => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/auth/signup", values);
      if (data) {
        router.push("/login");
      }
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      }
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
