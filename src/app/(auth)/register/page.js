import SubmitButton from "@/components/SubmitButton";
import { createUser } from "@/lib/userAction";
import { cookies } from "next/headers";
import React from "react";
import toast from "react-hot-toast";

const page = () => {
  // const msg = cookies().get("message");
  // if (msg !== "undefined") {
  //   if (JSON.parse(msg)?.error === true) {
  //     toast.error(JSON.parse(msg)?.msg);
  //   } else {
  //     toast.success(JSON.parse(msg)?.msg);
  //   }
  // }
  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <div className="min-w-[400px] shadow bg-slate-700">
        <div className="p-5">
          <h1>Register</h1>
        </div>
        <form action={createUser} className="p-5 text-white">
          <div className="mb-2 flex flex-col gap-1">
            <label className="text-md font-medium text-gray-500">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="p-3 bg-slate-900 rounded-md"
              required
            />
          </div>
          <div className="mb-2 flex flex-col gap-1">
            <label className="text-md font-medium text-gray-500">Email</label>
            <input
              type="email"
              name="email"
              required
              className="p-3 bg-slate-900 rounded-md"
            />
          </div>
          <div className="mb-2 flex flex-col gap-1">
            <label className="text-md font-medium text-gray-500">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="p-3 bg-slate-900 rounded-md"
            />
          </div>
          <div className="mb-2">
            <SubmitButton
              style={"bg-blue-600 text-white hover:bg-blue-700"}
              text={"CREATE"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
