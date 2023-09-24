"use client";

import { ErrorMessage, Field } from "formik";
const Input = (props: { type: string; name: string; label: string }) => {
  return (
    <div className="form-group mb-4">
      <label
        htmlFor={props.name}
        className="block text-sm font-semibold text-gray-800"
      >
        {props.label}
      </label>
      <Field
        {...props}
        className="form-control block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
      <ErrorMessage
        component="p"
        name={props.name}
        className="mt-2 text-sm text-red-600 dark:text-red-500"
      />
    </div>
  );
};

export default Input;
