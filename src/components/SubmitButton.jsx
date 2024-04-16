"use client";
import React from "react";
import { useFormStatus } from "react-dom";
const SubmitButton = ({ text, style }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`${
        pending ? "bg-gray-500 text-black" : style
      } p-2 px-5 rounded-md text-sm`}
    >
      {pending ? "Submitting" : text}
    </button>
  );
};

export default SubmitButton;
