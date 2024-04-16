"use client";
import React from "react";
import toast from "react-hot-toast";

const Toast = ({ msg, type }) => {
  if (type === "success") {
    return toast.success(msg);
  } else {
    return toast.error(msg);
  }
};

export default Toast;
