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
import axios from "axios";
import { HeadersKeys } from "@/globaltypes";

const Profile = () => {
  const { loading, token } = UseAuthCheckHook({ statusReturn: true });
  const formikRef = useRef<FormikProps<any>>(null);
  const handleProfileUpdate = (
    setSubmitting: (isSubmitting: boolean) => void,
    values: ProfileSchema
  ) => {
    console.log("values: ", values);
    setSubmitting(false);
  };
  useEffect(() => {
    if (token) {
      (async function () {
        try {
          const { data } = await axios.get("/api/auth/user", {
            headers: { [HeadersKeys.TOKEN]: token },
          });
          if (data) {
            formikRef.current?.setFieldValue("firstName", data.user.firstName);
            formikRef.current?.setFieldValue("lastName", data.user.lastName);
            formikRef.current?.setFieldValue("email", data.user.email);
          }
        } catch (error: any) {
          if (error.response) {
            alert(error.response.data.message);
          }
        }
      })();
    }
  }, [loading, token]);
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
