"use client";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import { loginSchema, loginValues, validationSchema } from "@login/validation";
import Input from "@components/input";
import Button from "@components/button";
import AuthLayout from "@components/authlayout";
import Loading from "@/app/loading";
import UseAuthCheckHook from "@/app/hooks/useauthcheckhook";

const Login = () => {
  const router = useRouter();
  const { loading, setLoading } = UseAuthCheckHook();
  const handleLogin = async (
    setSubmitting: (isSubmitting: boolean) => void,
    values: loginSchema
  ) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", requestOptions);
      const data = await res.json();
      router.push("/dashboard");
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
