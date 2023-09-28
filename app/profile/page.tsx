"use client";

import { Form, Formik, FormikProps } from "formik";
import AuthLayout from "@components/AuthLayout";
import {
  validationSchema,
  profileValues,
  ProfileSchema,
} from "@profile/validation";
import { useEffect, useRef, useState } from "react";
import Input from "@components/Input";
import Button from "@components/Button";
import UseAuthCheckHook from "@hooks/UseAuthCheckHook";
import Loading from "@/app/loading";
import axios from "axios";
import { HeadersKeys } from "@/globaltypes";

const Profile = () => {
  const { loading, token, setLoading } = UseAuthCheckHook({
    statusReturn: true,
  });
  const [id, setId] = useState();
  const formikRef = useRef<FormikProps<any>>(null);
  const handleProfileUpdate = async (
    setSubmitting: (isSubmitting: boolean) => void,
    values: ProfileSchema
  ) => {
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      id: id,
    };
    setLoading(true);
    try {
      const { data } = await axios.put("/api/auth/user", payload);
      if (data) {
        getUserData();
      }
    } catch (error: any) {
      if (error?.response?.data?.message) {
        alert(error.response.data.message);
      }
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (token) {
      getUserData();
    }
  }, [token]);

  async function getUserData() {
    try {
      const { data } = await axios.get("/api/auth/user", {
        headers: { [HeadersKeys.TOKEN]: token },
      });
      if (data) {
        setId(data.id);
        formikRef.current?.setFieldValue("firstName", data.firstName);
        formikRef.current?.setFieldValue("lastName", data.lastName);
        formikRef.current?.setFieldValue("email", data.email);
      }
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  }

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
            <Input type="email" name="email" label="Email" disabled={true} />
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
