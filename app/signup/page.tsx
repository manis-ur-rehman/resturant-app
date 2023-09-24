"use client";

import { Form, Formik } from "formik";
import { signUpSchema, validationSchema } from "./validation";

const SignUp = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">
          Sign up
        </h1>
        <Formik
          initialValues={signUpSchema}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 2000);
            console.log("values: ", values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form className="mt-6">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-800"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.password && touched.password && errors.password}
                </p>
              </div>
              <div className="mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
