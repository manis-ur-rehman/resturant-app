"use client";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import { LoginSchema, loginValues, validationSchema } from "@login/validation";
import Input from "@components/Input";
import Button from "@components/Button";
import AuthLayout from "@components/AuthLayout";
import Loading from "@/app/loading";
import UseAuthCheckHook from "@hooks/UseAuthCheckHook";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const { loading, setLoading } = UseAuthCheckHook({ statusReturn: false });
  const handleLogin = async (
    setSubmitting: (isSubmitting: boolean) => void,
    values: LoginSchema
  ) => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/auth/login", values);
      if (data) {
        router.push("/dashboard");
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
