"use client";

import { Form, Formik, FormikProps } from "formik";
import AuthLayout from "@components/AuthLayout";
import {
  validationSchema,
  profileValues,
  ProfileSchema,
} from "@profile/validation";
import { useEffect, useRef } from "react";
import Input from "@components/Input";
import Button from "@components/Button";
import UseAuthCheckHook from "@hooks/UseAuthCheckHook";
import Loading from "@/app/loading";

const Profile = () => {
  const { loading } = UseAuthCheckHook({ statusReturn: true });
  const formikRef = useRef<FormikProps<any>>(null);
  const handleProfileUpdate = (
    setSubmitting: (isSubmitting: boolean) => void,
    values: ProfileSchema
  ) => {
    console.log("values: ", values);
    setSubmitting(false);
  };
  useEffect(() => {
    formikRef.current?.setFieldValue("firstName", "anees");
    formikRef.current?.setFieldValue("lastName", "awan");
    formikRef.current?.setFieldValue("email", "abc@gmail.com");
  }, [loading]);
  if (loading) {
    return <Loading />;
  }
  return (
    <AuthLayout title="Profile" description="">
      <Formik
        innerRef={formikRef}
        initialValues={profileValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) =>
          handleProfileUpdate(setSubmitting, values)
        }
      >
        {({ isSubmitting }: FormikProps<ProfileSchema>) => (
          <Form className="mt-6">
            <Input type="email" name="email" label="Email" />
            <Input type="text" name="firstName" label="First Name" />
            <Input type="text" name="lastName" label="Last Name" />
            <Button
              type="submit"
              disabled={isSubmitting}
              label="Update"
              parentClass="mt-2"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            />
            <Button
              type="button"
              disabled={false}
              label="Go to back"
              parentClass="mt-2"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            />
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Profile;
